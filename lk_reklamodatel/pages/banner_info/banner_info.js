angular.module('lk_reklamodatel').controller('bannerInfoCtrl',function($stateParams,$localStorage,bannerService) {
	
	var vm = this,
	colors = ['#008eaa','#37951b','#f7d61c','#c95c36','#d8d8d8'];

	vm.company  = $localStorage.company;

	bannerService.getBanner($stateParams.id,function(data) {
		vm.banner = data;
		vm.date_from = vm.banner.created_at;
		vm.date_to = vm.banner.current_time; // current time from server
		vm.getBannerGraph();		
	})


	
	
	vm.getBannerGraph = function(){
		console.log(vm.date_from,vm.date_to);
		bannerService.getBannerGraph($stateParams.id,vm.date_from,vm.date_to,function (data) {
			vm.graphs = data;
			vm.drawnGraphs=[];
			data.graphs.ctr={values:[],label:''};
			data.graphs.ctr.label = 'CTR';
			for(var i=0;i<data.graphs.transitions.values.length;i++){
				data.graphs.ctr.values.push((data.graphs.transitions.values[i]/data.graphs.impressions.values[i])*100);
			}
			
			vm.drawGraph("transitions",'#37951b')
			vm.drawGraph("impressions",'#008eaa')
		})
	}



	vm.drawGraph = function(graphName,color) {
		var addToDrawnGraphs = true;
		vm.drawnGraphs.forEach(function(graph,i) {
			if(graph.custom_name==graphName) {
				vm.drawnGraphs.splice(i,1);
				addToDrawnGraphs = false;
				Plotly.newPlot('lk_line_graph', vm.drawnGraphs, layout,{displayModeBar: false});
			}
		})
		
		if(!addToDrawnGraphs) return;

		var trace = {
				custom_name:graphName,
				type: 'scatter',
				x: vm.graphs.days,
				y: vm.graphs.graphs[graphName].values,
				mode: 'lines',
				name: vm.graphs.graphs[graphName].label,
				line: {
					color: color,
					width: 3
				}
			};
		vm.drawnGraphs.push(trace);		
		var layout = {
			width: 850,
			height: 380,
			margin: {l: 40,r: 10, b: 50,t: 10,pad: 4}
		};

		Plotly.newPlot('lk_line_graph', vm.drawnGraphs, layout,{displayModeBar: false});
	}


	drawDonut('lk_likes_donut', ['Понарвилось','Не ответили' ,'Ewe chec to'], [62.5,30,7.5]);	


	function drawDonut(	id,labels,values) {
		var data = [{
			values:values,
			labels:labels,
			hoverinfo: 'label+percent',
			hole: .5,
			type: 'pie',
			textinfo:'none',
			marker: {
				colors: colors
			}
		}];

		var layout = {
			showlegend: false,
			height: 140,
			width: 140,
			margin: {l: 0,r: 0,	b: 0,t: 0,pad: 4}
		};

		Plotly.newPlot(id, data, layout,{displayModeBar: false});
	}



	
})
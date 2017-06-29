angular.module('lk_reklamodatel').controller('bannerInfoCtrl',function(reklamodatelService,$localStorage,$state,$stateParams) {
	
	var vm = this;

	vm.limit = 5;
	vm.beginIndex =0;
	vm.amount=0;
	vm.banners=[];
	vm.allSelected = false;
	vm.isButtonsActive=0;
	vm.company  = $localStorage.company;

	getBannersOfCompany();
	drawGraph();
	drawLikes();
	drawGenders();

	function drawGraph() {
		trace1 = {
			type: 'scatter',
			x: ['22.05.17', '23.05.17', '24.05.17','25.05.17','26.05.17','27.05.17'],
			y: [100, 150, 230, 370,480,610],
			mode: 'lines',
			name: 'Показы',
			line: {
				color: 'rgb(55, 149, 27)',
				width: 3
			}
		};

		trace2 = {
			type: 'scatter',
			x: ['22.05.17', '23.05.17', '24.05.17','25.05.17','26.05.17','27.05.17'],
			y: [120, 90, 150, 520,320,220],
			mode: 'lines',
			name: 'Переходы',

			line: {
				color: 'rgb(0, 153, 153)',
				width: 3
			}
		};

		var layout = {
			width: 850,
			height: 380
		};

		var data = [trace1, trace2];

		Plotly.newPlot('lk_line_graph', data, layout,{displayModeBar: false});
	}

	function drawLikes() {
		var data = [{
			values: [62.5,30,7.5],
			labels: ['Понарвилось','Не ответили' ,'Ewe chec to'],
			hoverinfo: 'label+percent',
			hole: .5,
			type: 'pie',
			textinfo:'none',
			marker: {
				colors: ['rgb(0, 142, 170)','#37951b','#f7d61c','#d8d8d8','#c95c36']
			}
		}];

		var layout = {
			annotations: [
			{
				font: {
					size: 20
				},
				showarrow: false,
				text: '',
				x: 0.9,
				y: 0.9
			},
			],
			showlegend: false,
			height: 140,
			width: 140,
			margin: {
				l: 0,
				r: 0,
				b: 0,
				t: 0,
				pad: 4
			}
		};

		Plotly.newPlot('lk_likes_donut', data, layout,{displayModeBar: false});
	}

	function drawGenders() {
		var data = [{
			values: [62.5,37.5],
			labels: ['Мужчины','Женщины' ],
			hoverinfo: 'label+percent',
			hole: .5,
			type: 'pie',
			textinfo:'none',
			marker: {
				colors: ['rgb(0, 142, 170)','#37951b','#f7d61c','#d8d8d8','#c95c36']
			}
		}];

		var layout = {
			annotations: [
			{
				font: {
					size: 20
				},
				showarrow: false,
				text: '',
				x: 0.9,
				y: 0.9
			},
			],
			showlegend: false,
			height: 140,
			width: 140,
			margin: {
				l: 0,
				r: 0,
				b: 0,
				t: 0,
				pad: 4
			}
		};

		Plotly.newPlot('lk_genders_donut', data, layout,{displayModeBar: false});
	}
	


	function getBannersOfCompany(){
		reklamodatelService.getBannersOfCompany(vm.company.id,vm.beginIndex,vm.limit,function(data){
			vm.banners =vm.banners.length==0?data.banners:vm.banners.concat(data.banners);
			vm.amount = data.amount;
		});	
	}

	
})
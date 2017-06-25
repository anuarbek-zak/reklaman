angular.module('admin_panel').controller('reklamodateliCtrl',function(myService,$state,$stateParams) {
	
	var vm = this;

	vm.limit = $stateParams.limit?parseInt($stateParams.limit):25;
	vm.beginIndex =$stateParams.from?parseInt($stateParams.from):0;
	vm.companies=[];

	getCompanies();

	function getCompanies(){
		myService.getCompanies(function(data){
			vm.companies =vm.companies.length==0?data.companies:vm.companies.concat(data.companies);
			vm.amount = data.amount;
			vm.total_amount = data.total_amount;
		})

	}
	
	myService.getBannersRegistrations(function(data){
		vm.counters = data;
	})	

	vm.getNewData = function(){
		if(vm.beginIndex+vm.limit>vm.amount) return;
		vm.beginIndex+=vm.limit;				
		getCompanies();
	}
	
	vm.changeLimit = function(newLimit){
		vm.limit = newLimit;			
	}	
})
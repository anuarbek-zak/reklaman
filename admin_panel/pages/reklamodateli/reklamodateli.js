angular.module('admin_panel').controller('reklamodateliCtrl',function(reklamodatelService,myService,$state,$stateParams) {
	
	var vm = this;

	vm.limit =25;
	vm.beginIndex =0;
	vm.companies=[];

	getCompanies();

	function getCompanies(){
		reklamodatelService.getCompanies(vm.beginIndex,vm.limit,function(data){
			vm.companies =vm.companies.length==0?data.companies:vm.companies.concat(data.companies);
			vm.amount = data.amount;
			vm.total_amount = data.total_amount;
		})

	}
	
	myService.getBannersRegistrations(function(data){
		vm.counters = data;
	})	

	vm.getNewData = function(){
		if(vm.companies.length>=vm.amount) return;
		vm.beginIndex=vm.companies.length+1;				
		getCompanies();
	}
	
	vm.changeLimit = function(newLimit){
		vm.limit = newLimit;			
	}	
})
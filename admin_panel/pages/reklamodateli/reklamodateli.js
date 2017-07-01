angular.module('admin_panel').controller('reklamodateliCtrl',function(reklamodatelService) {
	
	var vm = this;

	vm.limit = 25;
	vm.beginIndex =0;
	vm.companies = [];
	vm.searchText = "";

	getCompanies();

	function getCompanies(){
		reklamodatelService.getCompanies({from:vm.beginIndex,limit:vm.limit,search:vm.searchText},function(data){
			vm.companies =vm.companies.length==0?data.companies:vm.companies.concat(data.companies);
			vm.amount = data.amount;
		})

	}

	reklamodatelService.getCounters(function(data) {
		vm.counters = data.counters;
		vm.total_amount = data.total_amount;
	})

	vm.getNewData = function(){
		if(vm.companies.length>=vm.amount) return;
		vm.beginIndex=vm.companies.length+1;				
		getCompanies();
	}

	vm.search = function(){
		vm.beginIndex = 0;
		vm.companies = [];
		getCompanies();
	}
	
	vm.changeLimit = function(newLimit){
		vm.limit = newLimit;			
	}	
})
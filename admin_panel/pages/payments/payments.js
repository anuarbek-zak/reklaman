angular.module('admin_panel').controller('paymentsCtrl',function(reklamodatelService) {
	
	var vm = this,
	timeout;

	vm.limit = 25;
	vm.beginIndex = 0;
	vm.searchText = "";
	vm.filters = {};
	vm.payments = [];	
	vm.totalSumm = 0;

	function getPayments(){
		reklamodatelService.getPayments({filters:vm.filters,from:vm.beginIndex,limit:vm.limit,search:vm.searchText},function(data){
		    if(vm.beginIndex==0) vm.payments = [];
			vm.payments = vm.payments.concat(data.payments);			
			vm.totalSumm = data.totalSumm;
			vm.amount = data.amount;
		})
	}	
	
	getPayments()

	vm.getNewData = function(){
		if(vm.payments.length>=vm.amount) return;
		vm.beginIndex+=vm.payments.length+1;				
		getPayments();
	}
	
	vm.changeLimit = function(newLimit){
		vm.limit = newLimit;			
	}	

	vm.filter = function(){
		vm.beginIndex=0;
		getPayments();
	}

	vm.search = function () {
		 if (timeout) {  
		    clearTimeout(timeout);
		  }
		  timeout = setTimeout(function() {
		     vm.filter();
		  }, 200);
		
	}

	vm.bill = function(id){
		//some logic...
	}

})
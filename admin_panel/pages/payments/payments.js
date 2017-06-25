angular.module('admin_panel').controller('paymentsCtrl',function(myService,$state,$stateParams) {
	
	var vm = this;

	vm.limit = $stateParams.limit?parseInt($stateParams.limit):25;
	vm.beginIndex =$stateParams.from?parseInt($stateParams.from):0;

	vm.filters = {};
	vm.payments=[];	
	vm.totalSumm = 0;

	function getPayments(){
		myService.getPayments(vm.filters,vm.beginIndex,vm.limit,function(data){
			vm.payments = vm.payments.length==0?data.payments:vm.payments.concat(data.payments);
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
		vm.payments=[];
		getPayments();
	}

	vm.bill = function(id){

	}

})
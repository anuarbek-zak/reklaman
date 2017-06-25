angular.module('admin_panel').controller('registrationsRequestsCtrl',function(reklamodatelService,$state,$stateParams) {
	
	var vm = this;

	vm.limit = 25;
	vm.beginIndex =0;
	vm.amount=0;
	vm.requests=[];

	getRequests();

	
	function getRequests(){
		reklamodatelService.getRequests(vm.beginIndex,vm.limit,function(data){
			vm.requests =vm.requests.length==0?data.requests:vm.requests.concat(data.requests);
			vm.amount = data.amount;
		});	
	}

	vm.delete = function(request){
		vm.requests.splice(vm.requests.indexOf(request),1);
		reklamodatelService.deleteFromRequests(request.id,false);
	}

	vm.add = function(request) {
		vm.requests.splice(vm.requests.indexOf(request),1);
		reklamodatelService.deleteFromRequests(request.id,true);

	}

	vm.read = function (request) {
		vm.requests.splice(vm.requests.indexOf(request),1);
		reklamodatelService.deleteFromRequests(request.id,false);
	}

	vm.getNewData = function(){
		if(vm.beginIndex+vm.limit>vm.amount) return;
		vm.beginIndex+=vm.limit;				
		getRequests();
	}
	
	vm.changeLimit = function(newLimit){
		vm.limit = newLimit;			
	}	
})
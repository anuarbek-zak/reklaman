angular.module('admin_panel').controller('usersQuestionsCtrl',function($state,$stateParams,userService) {
	
	var vm = this,
	timeout;
	
	vm.limit = 25;
	vm.beginIndex=0;
	vm.amount=0;
	vm.questions=[];
	vm.searchText = "";

	getQuestions();

	function getQuestions(){
		userService.getQuestions({from:vm.beginIndex,limit:vm.limit,search:vm.searchText},function(data){
			if(vm.beginIndex==0) vm.questions = [];
			vm.questions = vm.questions.concat(data.questions);
			vm.amount = data.amount
		});
	}

	vm.search = function () {
		if (timeout) {  
			clearTimeout(timeout);
		}
		timeout = setTimeout(function() {
			vm.beginIndex = 0;
			getQuestions();
		}, 200);
	}

	vm.getNewData = function(){
		if(vm.questions.length>=vm.amount) return;
		vm.beginIndex=vm.questions.length+1;
		getQuestions();
	}
	
	vm.changeLimit = function(newLimit){
		vm.limit = newLimit;			
	}	
})
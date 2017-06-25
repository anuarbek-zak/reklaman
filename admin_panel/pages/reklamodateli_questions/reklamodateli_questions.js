angular.module('admin_panel').controller('reklamodateliQuestionsCtrl',function($state,$stateParams,reklamodatelService) {
	
	var vm = this;
	
	vm.limit = 25;
	vm.beginIndex=0;
	vm.amount=0;
	vm.questions=[];

	getQuestions();

	function getQuestions(){
		reklamodatelService.getQuestions(vm.beginIndex,vm.limit,function(data){
			vm.questions = vm.questions.length==0?data.questions:vm.questions.concat(data.questions);		
			vm.amount = data.amount
		});
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
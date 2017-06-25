angular.module('admin_panel')
.controller('mainAdminCtrl',function(myService,$rootScope,$localStorage) {
	
	var vm = this;
	vm.compressed=false;
 	vm.activeItem=1;

	myService.getQuestionsCounter(function(data){
		vm.questionsCounter = data;
	});

	myService.getAdmin(function(data){
		vm.admin = data;
		$localStorage.admin = vm.admin;
	})	

})
angular.module('admin_panel')
.controller('headerAdminCtrl',function(myService,$rootScope,$localStorage) {
	
	var vm = this;
	console.log('ap h')
	myService.getQuestionsCounter(function(data){
		vm.questionsCounter = data;
	});

	myService.getAdmin(function(data){
		vm.admin = data;
		$localStorage.admin = vm.admin;
	})	

})
.controller('sidebarCtrl',function($http) {
	var vm = this;
  vm.compressed=false;

})
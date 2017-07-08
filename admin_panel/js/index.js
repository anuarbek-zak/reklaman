angular.module('admin_panel')
.controller('mainAdminCtrl',function(myService,$rootScope,$localStorage) {
	
	var vm = this;
	vm.compressed=false;
	vm.activeItem=1;

	myService.getQuestionsCounter(function(data){
		vm.questionsCounter = data;
	});

	vm.admin = {
		"id":1,
		"name":"Admin",
		"photo":"assets/images/zhdun_136443469_orig_.jpg",
		"email":"anuarbekzakirianov97@gmail.com",
		"status":{id:1,name:"Админ"}
	};
	$localStorage.admin = vm.admin;

})
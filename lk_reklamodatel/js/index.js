angular.module('lk_reklamodatel')
.controller('headerLkCtrl',function($localStorage,reklamodatelService) {
	var vm = this;
	
	reklamodatelService.getCompany(function(data) {
		vm.company = data;
		$localStorage.company = vm.company;
	})

})
.controller('sidebarCtrl',function($http) {
	var vm = this;
  	vm.compressed=false;

})
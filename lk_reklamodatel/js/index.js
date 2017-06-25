angular.module('lk_reklamodatel')
.controller('mainLkCtrl',function($localStorage,reklamodatelService,ticketService) {
	var vm = this;
	vm.compressed=false;
  	vm.activeItem=1;
  	vm.newMessages=0;

	reklamodatelService.getCompany(function(data) {
		vm.company = data;
		$localStorage.company = vm.company;
		ticketService.getCompanyTickets(vm.company.id,function(data) {
			data.forEach(function(ticket) {
				vm.newMessages+=ticket.new_messages;
			})
		})
		
	})  	
  	
})
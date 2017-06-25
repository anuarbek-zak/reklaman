angular.module('lk_reklamodatel').controller('lkSupportCtrl',function($state,$stateParams,$localStorage,ticketService) {
	
	var vm = this;
	vm.showModal = false;
	vm.newTicket = {};

	ticketService.getCompanyTickets($localStorage.company.id,function(data) {
		vm.tickets = data;
	})

	vm.closeTicket = function(ticket) {
		vm.tickets.splice(vm.tickets.indexOf(ticket),1);
		ticketService.close(ticket.id);
	}

	vm.clearNewTicket = function() {
		vm.newTicket={};	
	}

	vm.createTicket = function() {
		console.log(vm.newTicket)
		if(!vm.newTicket.subject || !vm.newTicket.text) return
		ticketService.create(vm.newTicket,$localStorage.company.id);
	}
	
})
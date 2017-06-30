angular.module('lk_reklamodatel').controller('lkSupportCtrl',function($localStorage,ticketService) {
	
	var vm = this;
	vm.showModal = false;
	vm.company = $localStorage.company;
	vm.newTicket = {};
	vm.searchText = "";

	getTickets()

	function getTickets() {
		ticketService.getCompanyTickets({id:vm.company.id,search:vm.searchText},function(data) {
			vm.tickets = data;
		})
	}	

	vm.closeTicket = function(ticket) {
		vm.tickets.splice(vm.tickets.indexOf(ticket),1);
		ticketService.close(ticket.id);
	}

	vm.clearNewTicket = function() {
		vm.newTicket={};	
	}

	vm.search = function() {
		vm.tickets = [];
		getTickets()
	}

	vm.createTicket = function() {
		if(!vm.newTicket.subject || !vm.newTicket.text) return;
		ticketService.create(vm.newTicket,$localStorage.company.id);
		vm.showModal = false;
	}
	
})
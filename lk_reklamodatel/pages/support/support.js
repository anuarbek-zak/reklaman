angular.module('lk_reklamodatel').controller('lkSupportCtrl',function($localStorage,ticketService) {
	
	var vm = this,
	timeout;
	vm.showModal = false;
	vm.company = $localStorage.company;
	vm.newTicket = {};
	vm.searchText = "";
	vm.tickets  = [];
	getTickets()

	function getTickets() {
		ticketService.getCompanyTickets({id:vm.company.id,search:vm.searchText},function(data) {
			vm.tickets = vm.tickets.concat(data);
			console.log(vm.tickets);;
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
		if (timeout) {  
		    clearTimeout(timeout);
		  }
		  timeout = setTimeout(function() {
		     vm.tickets = [];
			 getTickets();
		  }, 200);
	}

	vm.createTicket = function() {
		if(!vm.newTicket.subject || !vm.newTicket.text) return;
		ticketService.create(vm.newTicket,vm.company.id,function(newTicket) {
			vm.tickets.unshift(newTicket);	
		});
		vm.showModal = false;
	}
	
})
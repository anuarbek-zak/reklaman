angular.module('lk_reklamodatel').controller('companyCtrl',function(ticketService,$localStorage,bannerService) {
	var vm = this;
	vm.company = $localStorage.company;
	vm.showNotification = true;

	bannerService.getBannersOfCompany(vm.company.id,0,100,function(data) {
		vm.banners = data.banners;
	})

	ticketService.getCompanyTickets(vm.company.id,function(data) {
		vm.tickets = data;
	})

	vm.closeTicket = function(ticket) {
		vm.tickets.splice(vm.tickets.indexOf(ticket),1);
		ticketService.close(ticket.id);
	}

})
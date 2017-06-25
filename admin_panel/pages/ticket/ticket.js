angular.module('admin_panel').controller('ticketCtrl',function($localStorage,userService,ticketService,$state,$stateParams) {
	
	var vm = this;
	vm.limit =3 ;
	vm.messageText = "";

	ticketService.getStatuses(function(data) {
		vm.statuses = data;
	})

	ticketService.getTicket($localStorage.admin.id,$stateParams.id,function(data) {
		vm.ticket = data;
	})

	vm.save = function() {
		ticketService.update(vm.ticket);
	}

	vm.createMessage = function() {
		if(vm.messageText=="") return;	
		var message = {admin:$localStorage.admin,user:$stateParams.id,text:vm.messageText};
		message.from = $localStorage.admin;
		message.from.role = "Админ";
		message.created_at = Date.now();
		vm.ticket.messages.unshift(message);
		vm.messageText = "";
		ticketService.createMessage(vm.ticket.id,message);
	}

	vm.back = function() {
		window.history.back()
	}

})
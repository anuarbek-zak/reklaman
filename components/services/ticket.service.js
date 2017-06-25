angular.module('app')
.factory("ticketService", function($http) {
    var service = {};

    service.getStatuses = function(cb){
        //method - (get)
        //api - /api/ticket/status
        $http.get('jsons/ticket_statuses.json')
            .success(function(data){
                cb(data);
                })
            .error(function(err){
                console.log(err);
            })
    }

    service.getTicket = function(admin_id,user_id,cb){
        //method - (get)
        //api - /api/ticket/:admin_id/:user_id
        $http.get('jsons/ticket.json')
            .success(function(data){
                cb(data);
                })
            .error(function(err){
                console.log(err);
            })
    }
        
    service.update = function(ticket){
        //method - (put)
        //api - /api/ticket/
        //data - {ticket:ticket}
        $http.put('/api/ticket/',{ticket:ticket})
            .success(function(data){
                })
            .error(function(err){
                console.log(err);
            })
    }

    service.createMessage = function(ticket_id,message){
    	//method - (post)
    	//api - /api/ticket/message
        //data - {ticket_id:ticket_id,message:message}
    	$http.post('/api/ticket/message',{ticket_id:ticket_id,message:message})
			.success(function(data){
				})
			.error(function(err){
				console.log(err);
			})
    }
		
    return service;
  })    

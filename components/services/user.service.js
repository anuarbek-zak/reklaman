angular.module('app')
.factory("userService", function($http) {
    var service = {};

    service.saveUser = function(newUser,cb){
    	//method - (put)
    	//api - /api/user
    	//data - {user:newUser}
    	$http.put('/api/user')
			.success(function(data){
				})
			.error(function(err){
				console.log(err);
			})
    }
		
  
    service.getUsers = function(filters,from,limit,cb){
    	//method - (post)
    	//api - '/api/users
    	//data - {filters:filters,from:from,limit:limit}
    	$http.get('jsons/users.json')
			.success(function(data){
					cb(data);
				})
			.error(function(err){
				console.log(err);
			})
    }
   
    service.getUser = function(id,cb){
        //method - (get)
        //api - '/api/user/:id
        //parameter - id
        $http.get('jsons/user.json')
            .success(function(data){
                    cb(data);
                })
            .error(function(err){
                console.log(err);
            })
    }
   
    service.getWithdrawsStatuses = function(cb){
        //method - (get)
        //api - '/api/withdrawsStatuses
        $http.get('jsons/withdraw_status.json')
            .success(function(data){
                    cb(data);
                })
            .error(function(err){
                console.log(err);
            })
    }

    service.getWithdraws = function(filters,from,limit,cb){
        //method - (post)
        //api - '/api/withdraws
        //data -  {filters:filters,from:from,limit:limit}
        $http.get('jsons/withdraws.json')
            .success(function(data){
                    cb(data);
                })
            .error(function(err){
                console.log(err);
            })
    }

    service.changeWithdraw = function(withdraw){
        //method - (put)
        //api - '/api/withdraws
        //data -  {withdraw:withdraw}
        $http.post('/api/withdraws')
            .success(function(data){
                })
            .error(function(err){
                console.log(err);
            })
    }

    service.getQuestions = function(from,limit,cb){
    	//method - (get)
    	//api - '/api/user/questions
        //data -   {from:from,limit:limit}
    	$http.get('jsons/user_questions.json')
			.success(function(data){
                cb(data);
				})
			.error(function(err){
				console.log(err);
			})
    }

		
    return service;
  })    

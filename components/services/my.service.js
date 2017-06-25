angular.module('app')
.factory("myService", function($http) {
    var service = {};

    service.getQuestionsCounter = function(cb){
    	//(get)'/api/questions_counter
    	 $http.get('jsons/questions_counter.json')
				.success(function(data){
					cb(data);
				})
				.error(function(err){
					console.log(err);
				})
    }
   
    service.getAdmin = function(cb){
    	//(get)'/api/admin
			$http.get('jsons/admin.json')
					.success(function(data){
						cb(data);
					})
					.error(function(err){
						console.log(err);
					})
    }

    service.getCompanies = function(cb){
   		//method - (post)
    	//api - /api/companies
    	//data - {from:from,limit:limit}
				$http.get('jsons/companies.json')
				.success(function(data){
					cb(data);
				})
				.error(function(err){
					console.log(err);
				})
    }

    service.getBannersRegistrations = function(cb){
    	//(get)'/api/banners_registrations
    	$http.get('jsons/banners_registrations.json')
			.success(function(data){
					cb(data);
				})
			.error(function(err){
				console.log(err);
			})
    }

    service.getPayments = function(filters,from,limit,cb){
    	//method - (post)
    	//api - /api/payments
    	//data - {filters:filters,from:from,limit:limit}
    	$http.get('jsons/payments.json')
			.success(function(data){
					cb(data);
				})
			.error(function(err){
				console.log(err);
			})
    }
		
    service.filterPayments = function(dateFrom,dateTo,cb){
    	//method - (post)
    	//api - '/api/payment/
    	//data - {dateFrom:dateFrom,dateTo:dateTo}
    	$http.post('jsons/payments_filter.json')
			.success(function(data){
					cb(data);
				})
			.error(function(err){
				console.log(err);
			})
    }
    
    service.getListOptions = function(cb){
    	//method - (get)
    	//api - '/api/user_list_options
    	$http.get('jsons/user_list_options.json')
			.success(function(data){
					cb(data);
				})
			.error(function(err){
				console.log(err);
			})
    }
    
    service.getListOptions = function(cb){
    	//method - (get)
    	//api - '/api/user_list_options
    	$http.get('jsons/user_list_options.json')
			.success(function(data){
					cb(data);
				})
			.error(function(err){
				console.log(err);
			})
    }
		
		
    return service;
  })    

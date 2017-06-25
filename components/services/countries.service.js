angular.module('app')
.factory("countriesService", function($http) {
    var service = {};

    service.getCountries = function(cb,begin,limit){
    	//(post)'/api/countries
    	//data - {from:begin,limit:limit}
    	var data = {};
    	if(begin && limit) data = {from:begin,limit:limit};
    	 $http.get('jsons/countries.json')
				.success(function(data){
					cb(data);
				})
				.error(function(err){
					console.log(err);
				})
    	}

    service.getCities = function(cb,begin,limit){
    	//(post)'/api/countries
    	//data - {from:begin,limit:limit}
    	var data = {};
    	if(begin && limit) data = {from:begin,limit:limit};
    	 $http.get('jsons/cities.json')
				.success(function(data){
					cb(data);
				})
				.error(function(err){
					console.log(err);
				})
    	}
    
    service.getManagingCountries = function(cb){
    	//(get)'/api/managing_countries
    	 $http.get('jsons/managing_countries.json')
				.success(function(data){
					cb(data);
				})
				.error(function(err){
					console.log(err);
				})
    }

    service.addToManaging = function(id){
    	//(post)'/api/managing_countries/:id
    	//params - country id	
    	 $http.post('/api/managing_countries/'+id)
				.success(function(data){
					cb(data);
				})
				.error(function(err){
					console.log(err);
				})
    }

    service.removeFromManaging = function(id){
    	//(post)'/api/managing_countries/:id
    	//params - country id	
    	 $http.delete('/api/managing_countries/'+id)
				.success(function(data){
					cb(data);
				})
				.error(function(err){
					console.log(err);
				})
    }

    service.changeStatus = function(which){
    	//(put)'/api/coutries/:which
    	//params - to which status	
    	 $http.put('/api/managing_countries/'+which)
				.success(function(data){
					cb(data);
				})
				.error(function(err){
					console.log(err);
				})
    }

		
    return service;
  })    

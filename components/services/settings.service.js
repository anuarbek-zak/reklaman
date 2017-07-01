angular.module('app')
.factory("settingsService", function($http) {
    var service = {};

    service.getRoutes = function(cb){
    	//method - (get)
    	//api - '/api/routes
    	$http.get('jsons/routes.json')
			.success(function(data){
					cb(data);
				})
			.error(function(err){
				console.log(err);
			})
    }

    service.sendCustomRequest = function(route,cb){
   //  	$http({
   //  			method: route.method,
   //              url: route.api
   //  		})
			// .success(function(data){
			// 		cb(data);
			// 	})
			// .error(function(err){
			// 	console.log(err);
			// })

			$http.get('jsons/routes.json')
			.success(function(data){
					cb(data);
				})
			.error(function(err){
				console.log(err);
			})
    }
		

    service.getSettings = function(data,cb){
    	//mehtod - post
    	//api - /api/settings/
    	//data - {from:number,limit:number,search:string}
    	    	console.log(data);

			$http.get('jsons/settings.json')
			.success(function(data){
					cb(data);
				})
			.error(function(err){
				console.log(err);
			})
    }


    service.updateSetting = function(setting){
    	//mehtod - put
    	//api - /api/setting
    	//data - {setting:setting}
			$http.put('/api/setting',{setting:setting})
			.success(function(data){
					cb(data);
				})
			.error(function(err){
				console.log(err);
			})
    }
		
    return service;
  })    

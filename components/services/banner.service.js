angular.module('app')
.factory("bannerService", function($http,Upload) {
    var service = {};

    service.getBannersOfCompany = function(id,from,limit,cb){
        //method - (post)
        //api - '/api/banners/:id
        //data -   {from:from,limit:limit}
        $http.get('jsons/reklamodatel_banners.json')
            .success(function(data){
                data.banners.forEach(function(i){
                    i.checked = false;
                })
                cb(data);
             })
            .error(function(err){
                console.log(err);
            })
    }

    service.getBanner = function(id,cb){
        //method - (get)
        //api - '/api/banner/:id
        $http.get('jsons/banner.json')
            .success(function(data){
                cb(data);
             })
            .error(function(err){
                console.log(err);
            })
    }

    service.getBannerGraph = function(id,cb){
        //method - (get)
        //api - '/api/banner/:id/graph
        $http.get('jsons/banner_graph.json')
            .success(function(data){
                cb(data);
             })
            .error(function(err){
                console.log(err);
            })
    }

    service.getStatuses = function(cb){
        //method - (get)
        //api - '/api/banner/statuses
        $http.get('jsons/banner_statuses.json')
            .success(function(data){
                cb(data);
             })
            .error(function(err){
                console.log(err);
            })
    }

    service.getBannersOnModeration = function(from,limit,cb){
        //method - (post)
        //api - '/api/banners/on_moderation
        //data -  {from:from,limit:limit}
        $http.get('jsons/banners_on_moderation.json')
            .success(function(data){
                data.banners.forEach(function(i){
                    i.checked = false;
                })
                cb(data);
             })
            .error(function(err){
                console.log(err);
            })
    }

    service.update = function(bannersToUpdate){
       //method - (put)
        //api - /api/banners/
        //data -   {(bannersToUpdate:(bannersToUpdate}
        $http.put('/api/banners/',{bannersToUpdate:bannersToUpdate})
            .success(function(data){
                cb(data);
                })
            .error(function(err){
                console.log(err);
            })
        }

    service.delete = function(bannersToRemove){
        //method - (delete)
        //api - '/api/banners/
        //data -   {bannersToRemove:bannersToRemove}
        $http.delete('/api/banners/',{bannersToRemove:bannersToRemove})
            .success(function(data){
                cb(data);
                })
            .error(function(err){
                console.log(err);
            })
    }

    service.copy = function(company_id,bannersToCopy,cb){
        //method - (post)
        //api - '/api/banners/copy
        //data -   {company_id:company_id,bannersToCopy:bannersToCopy}
        $http.post('/api/banners/copy',{company_id:company_id,bannersToCopy:bannersToCopy})
            .success(function(newBanners){
                cb(newBanners);
                })
            .error(function(err){
                console.log(err);
            })
    }

    service.saveAsDraft = function(banner){
        //method - (post)
        //api - '/api/banners/asDraft
        //data -   {banner:banner}
        $http.post('/api/banners/asDraft',{banner:banner})
            .success(function(newBanners){
               
                })
            .error(function(err){
                console.log(err);
            })
    }

    service.sendToModeration = function(file,banner){
        //method - (post)
        //api - '/api/banner/toModeration
        //data -   {file:file,banner:banner}
       Upload.upload({
            url: '/api/banner/toModeration',
            data: {file:file,banner:banner}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
        });
    }
		
    return service;
  })    

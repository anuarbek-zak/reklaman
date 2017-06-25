angular.module('app')
.factory("reklamodatelService", function($http) {
    var service = {};

    service.getQuestions = function(from,limit,cb){
        //method - (post)
        //api - '/api/reklamodatel/questions
        //data -   {from:from,limit:limit}
        $http.get('jsons/reklamodatel_questions.json')
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

    service.getCompany = function(cb){
        //method - (get)
        //api - /api/company/:id
        //params - compamy id
                $http.get('jsons/company.json')
                .success(function(data){
                    cb(data);
                })
                .error(function(err){
                    console.log(err);
                })
    }

    service.getRequests = function(from,limit,cb){
        //method - (post)
        //api - '/api/reklamodatel/requests
        //data -   {from:from,limit:limit}
        $http.get('jsons/reklamodatel_requests.json')
            .success(function(data){
                cb(data);
                })
            .error(function(err){
                console.log(err);
            })
    }

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

    service.deleteFromRequests = function(company_id,addToCompaniesList){
        //method - (post)
        //api - '/api/banners/copy
        //data -   {company_id:company_id,addToCompaniesList:addToCompaniesList}
        $http.post('/api/reklamodatel/removeFromRequests',{company_id:company_id,addToCompaniesList:addToCompaniesList})
            .success(function(newBanners){
                cb(newBanners);
                })
            .error(function(err){
                console.log(err);
            })
    }
		
    return service;
  })    

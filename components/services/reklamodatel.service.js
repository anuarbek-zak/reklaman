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

    service.getCompanies = function(from,limit,cb){
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

    service.getCompany = function(id,cb){
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

    service.getBillings = function(id,cb){
        //method - (get)
        //api - /api/company/:id/billings
        //params - compamy id
                $http.get('jsons/billings.json')
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

    service.update = function(file,company) {
        //api - '/api/reklamodatel
        //data -   {file:file,banner:banner}
       Upload.upload({
            url: '/api/reklamodatel/update',
            data: {file:file,company:company}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
        });
    }
		
    return service;
  })    

angular.module('lk_reklamodatel')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('company', {
                url: '/company',
                templateUrl: 'lk_reklamodatel/pages/company/company.html',
                controller:'companyCtrl',
                controllerAs:'vm',
                parent:'lk_reklamodatel'
            });
        $urlRouterProvider.otherwise('/company');
    });

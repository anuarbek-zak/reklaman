angular.module('lk_reklamodatel')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('company', {
                url: '/company',
                templateUrl: 'lk_reklamodatel/pages/company/company.html',
                controller:'companyCtrl',
                controllerAs:'vm',
                parent:'lk_reklamodatel'
            })
            .state('my_banners', {
                url: '/my_banners',
                templateUrl: 'lk_reklamodatel/pages/my_banners/my_banners.html',
                controller:'myBannersCtrl',
                controllerAs:'vm',
                parent:'lk_reklamodatel'
            })
            .state('lk_banner_update', {
                url: '/banner_update/:id',
                templateUrl: 'lk_reklamodatel/pages/banner_update/banner_update.html',
                controller:'lkBannerUpdateCtrl',
                controllerAs:'vm',
                parent:'lk_reklamodatel'
            })
            .state('lk_banner_create', {
                url: '/banner_create',
                templateUrl: 'lk_reklamodatel/pages/banner_create/banner_create.html',
                controller:'lkBannerCreateCtrl',
                controllerAs:'vm',
                parent:'lk_reklamodatel'
            })
            .state('lk_support', {
                url: '/support',
                templateUrl: 'lk_reklamodatel/pages/support/support.html',
                controller:'lkSupportCtrl',
                controllerAs:'vm',
                parent:'lk_reklamodatel'
            })
            .state('account_settings', {
                url: '/account_setting',
                templateUrl: 'lk_reklamodatel/pages/account_settings/account_settings.html',
                controller:'accountSettingsCtrl',
                controllerAs:'vm',
                parent:'lk_reklamodatel'
            });
        $urlRouterProvider.otherwise('/company');
    });

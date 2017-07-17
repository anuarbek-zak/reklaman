angular.module('admin_panel')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('reklamodateli', {
                url: '/reklamodateli',
                templateUrl: 'admin_panel/pages/reklamodateli/reklamodateli.html',
                controller:'reklamodateliCtrl',
                controllerAs:'vm',
                parent:'admin_panel'
            })
            .state('payments', {
                url: '/payments',
                templateUrl: 'admin_panel/pages/payments/payments.html',
                controller:'paymentsCtrl',
                controllerAs:'vm',
                parent:'admin_panel'
            })
            .state('users', {
                url: '/users',
                templateUrl: 'admin_panel/pages/users/users.html',
                controller:'usersCtrl',
                controllerAs:'vm',
                parent:'admin_panel'
            })
            .state('user_update', {
                url: '/user_update/:id',
                templateUrl: 'admin_panel/pages/user_update/user_update.html',
                controller:'userUpdateCtrl',
                controllerAs:'vm',
                parent:'admin_panel'
            })
            .state('user_withdraws', {
                url: '/user_withdraws/:id',
                templateUrl: 'admin_panel/pages/user_withdraws/user_withdraws.html',
                controller:'userWithdrawsCtrl',
                controllerAs:'vm',
                parent:'admin_panel'
            })
            .state('settings', {
                url: '/settings',
                templateUrl: 'admin_panel/pages/settings/settings.html',
                controller:'settingsCtrl',
                controllerAs:'vm',
                parent:'admin_panel'
            })
            .state('users_questions', {
                url: '/users_questions',
                templateUrl: 'admin_panel/pages/users_questions/users_questions.html',
                controller:'usersQuestionsCtrl',
                controllerAs:'vm',
                parent:'admin_panel'
            })
            .state('reklamodateli_questions', {
                url: '/reklamodateli_questions',
                templateUrl: 'admin_panel/pages/reklamodateli_questions/reklamodateli_questions.html',
                controller:'reklamodateliQuestionsCtrl',
                controllerAs:'vm',
                parent:'admin_panel'
            })
            .state('reklamodatel_banners', {
                url: '/reklamodatel_banners/:id',
                templateUrl: 'admin_panel/pages/reklamodatel_banners/reklamodatel_banners.html',
                controller:'reklamodatelBannersCtrl',
                controllerAs:'vm',
                parent:'admin_panel'
            })
            .state('banners_on_moderation', {
                url: '/banners_on_moderation',
                templateUrl: 'admin_panel/pages/banners_on_moderation/banners_on_moderation.html',
                controller:'bannersOnModerationCtrl',
                controllerAs:'vm',
                parent:'admin_panel'
            })
            .state('registrations_requests', {
                url: '/registrations_requests',
                templateUrl: 'admin_panel/pages/registrations_requests/registrations_requests.html',
                controller:'registrationsRequestsCtrl',
                controllerAs:'vm',
                parent:'admin_panel'
            })
            .state('banner_update', {
                url: '/banner_update/:id',
                templateUrl: 'admin_panel/pages/banner_update/banner_update.html',
                controller:'bannerUpdateCtrl',
                controllerAs:'vm',
                parent:'admin_panel'
            })
            .state('ap_banner_info', {
                url: '/banner_info/:id',
                templateUrl: 'admin_panel/pages/banner_info/banner_info.html',
                controller:'apBannerInfoCtrl',
                controllerAs:'vm',
                parent:'admin_panel'
            })
            .state('ap_banner_create', {
                url: '/banner_create/:id',
                templateUrl: 'admin_panel/pages/banner_create/banner_create.html',
                controller:'apBannerCreateCtrl',
                controllerAs:'vm',
                parent:'admin_panel'
            })
            .state('ticket', {
                url: '/ticket/:id',
                templateUrl: 'admin_panel/pages/ticket/ticket.html',
                controller:'ticketCtrl',
                controllerAs:'vm',
                parent:'admin_panel'
            });
    });

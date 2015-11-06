(function (module) {
    module.config(function ($routeProvider, $locationProvider) {

        $routeProvider.when('/home',{
            controller: 'HomeController',
            templateUrl: 'pages/home.html'
        });

        $routeProvider.when('/other',{
            templateUrl: 'pages/other.html'
        });

        $routeProvider.otherwise({
            redirectTo: '/home'
        });

        //$locationProvider.html5Mode(true);

    });
})(window.module);
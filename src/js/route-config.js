(function (module) {
    module.config(function ($routeProvider, $locationProvider) {

        $routeProvider.when('/home',{
            controller: 'HomeController',
            templateUrl: 'pages/main.html'
        });

        $routeProvider.otherwise({
            redirectTo: '/home'
        });

        $locationProvider.html5Mode(false);

    });
})(window.module);
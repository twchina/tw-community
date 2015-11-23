(function (module) {
    module.controller('MainController', ['$scope', '$location', function ($scope, $location) {
        $scope.getClass = function (path) {
            if ($location.path() === path) {
                return 'nav-current';
            }
        };
    }]);
})(window.module);


(function (module) {
    module.directive('myHref',['$location', function ($location) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                element.bind('click', function () {
                    $location.path(attr['myHref']);
                    scope.$apply();
                })
            }
        }
    }])
})(window.module);
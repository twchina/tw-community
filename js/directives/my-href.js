(function (module) {
    module.directive('myHref',['$location', function ($location) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                element.on('click', function () {
                    $location.path(attr['myHref']);
                    scope.$apply();
                });
                element.addClass('link');

            }
        }
    }])
})(window.module);
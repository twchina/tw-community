(function (module) {
    module.directive('myInclude', function () {
        return {
            restrict: 'EA',
            templateUrl: function (elem, attr) {
                return attr.src;
            },
            link: function (scope, element, attr) {

            }
        }
    })
})(window.module);
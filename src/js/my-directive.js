(function (module) {
    module.directive('myDirective',[function () {
        return {
            restrict: 'E',
            //replace: true,
            template:'<div>hello</div>',
            link: function (scope, element, attr) {
            }
        }
    }])
})(window.module);
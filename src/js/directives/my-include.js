(function (module) {
    module.directive('myInclude', ['$http', function ($http) {
        return {
            restrict: 'EA',
            link: function (scope, element, attr) {
                console.log(attr.src);
                $http.get(attr.src)
                    .then(function (result) {
                        element.html(result.data);
                        console.log(result.data);
                    });
            }
        }
    }])
})(window.module);
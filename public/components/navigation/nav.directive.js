'use strict';

angular.module('twitterComedy')
    .directive('navigation', ['$location', function($location) {
        return {
            restrict: 'E',
            templateUrl: 'components/navigation/nav.partial.html',
            link: function(scope, el, attr) {
                scope.isActive = function(route) {
                    return route === $location.path();
                };
            }
        };
    }]);

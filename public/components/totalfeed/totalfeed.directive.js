'use strict';

angular.module('twitterComedy')
    .directive('totalFeed', function() {
        return {
            restrict: 'E',
            templateUrl: 'components/totalfeed/totalfeed.partial.html'
        };
    });
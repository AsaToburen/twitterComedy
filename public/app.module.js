'use strict';

angular.module('twitterComedy', ['ngAnimate', 'ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/home/home.view.html',
                controller: 'feedCtrl'
            })
            .when('/comedians', {
                templateUrl: 'components/thumbnails/thumbnail.view.html',
                controller: 'thumbCtrl'
            })
            .when('/comedians/feed', {
                templateUrl: 'components/totalfeed/totalfeed.view.html',
                controller: 'feedCtrl'
            })
            .when('/comedians/:name', {
                templateUrl: 'components/detail/detail.view.html',
                controller: 'detailCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

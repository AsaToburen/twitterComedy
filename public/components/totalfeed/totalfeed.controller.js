'use strict';

angular.module('twitterComedy')
    .controller('feedCtrl', ['$scope', '$http',
        function($scope, $http) {

            $scope.correctTime = function(string) {
                return new Date(Date.parse(string));
            };

            function getTotalFeed() {

                var entries = [];

                activate();

                function activate() {
                    return $http.get('/api/comedians/tweets')
                        .success(function(data) {
                            $scope.entries = data;
                            return entries;
                        });
                }
            }
            getTotalFeed();
        }
    ]);

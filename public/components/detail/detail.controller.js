'use strict';

angular.module('twitterComedy')
    .controller('detailCtrl', ['$scope', '$http', '$routeParams',
        function($scope, $http, $routeParams) {

            function getDetail() {
                $scope.entries = [];
                $scope.user = [];

                activate();

                function activate() {
                    return $http.get('/api/comedians/' + $routeParams.name)
                        .success(function(data) {
                            $scope.entries = data;
                            $scope.user = data[0].user;
                        });
                }
            }
            getDetail();
        }
    ]);

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
                            var str = data[0].user.profile_image_url_https;
                            str = str.replace('normal', '400x400');
                            $scope.profileUrl = str;
                            $scope.user = data[0].user;
                        });
                }
            }
            getDetail();
        }
    ]);

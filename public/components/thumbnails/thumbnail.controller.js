'use strict';

angular.module('twitterComedy')
  .controller('thumbCtrl', ['$scope', '$http',
    function($scope, $http) {
  
      function getStarted() {
        $scope.comedians = [];

        activate();

        function activate() {
          return $http.get('/api/comedians/')
            .success(function(data) {
              $scope.comedians = data.users;
              return $scope.comedians;
            });
        }
      }
      getStarted();
    }
  ]);

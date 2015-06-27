angular.module('twitterComedy')
  .directive('profileThumbnails', function() {
    return {
      restrict: 'E',
      templateUrl: 'components/thumbnails/thumbnail.partial.html'
    };
  });

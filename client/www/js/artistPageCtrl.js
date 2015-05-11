function artistPageCtrl($scope, $http, $location, $stateParams, liveFactory){
  
  $scope.artistName = $stateParams.artistName;

  var artistName = $scope.artistName

  $scope.max = 5;

  $scope.getArtist = function(){
    return $http({
      method: 'GET',
      url: '/artist',
      params: {artistName: $scope.artistName}
    })
    .then(function(resp){  
      $scope.artist = resp.data;
      $scope.roundedRating = Math.round($scope.artist.avgRating);
      console.log('review count:', $scope.artist);
      $scope.oneReview = function() {
        if($scope.artist.reviewcount === 1){
          return true;
        }
      }
      $scope.reviewsExist = function() {
        return $scope.artist.reviewcount;
      }
    })
  };

  $scope.getReviews = function(){
    return $http({
      method: 'GET',
      url: '/getreviews',
      params: {artistName: $scope.artistName}
    })
    .then(function(resp){
      $scope.reviews = resp.data.rows;
      // $scope.reviewsCount = resp.data.count;
    })
  };
  
  $scope.writeReview = function(){
    $location.path('/newreview');
    liveFactory.artistNameReview = artistName;
  }

  $scope.toggle = function() {
    $scope.hideText = !$scope.hideText;
  };


  $scope.$on('$ionicView.enter', function(){
    $scope.hideText = true;
    $scope.getArtist();
    $scope.getReviews();
  });
  
}

angular.module('liveApp')
.controller('artistPageCtrl', ['$scope', '$http', '$location', '$stateParams', 'liveFactory', artistPageCtrl]);


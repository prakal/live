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
      $scope.oneReview = function() {
        if($scope.artist.reviewCount === 1){
          return true;
        }
      }
      $scope.reviewsExist = function() {
        return $scope.artist.reviewCount; // if($scope.artist.reviewCount > 0){
        //   return true;
        // }
        // else {
        //   return false;
        // }

        // $scope.artist.reviewCount > 0 ? return true : return false;
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
      $scope.reviewsCount = resp.data.count;
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


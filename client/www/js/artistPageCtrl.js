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
      console.log('This Artist info:', $scope.artist)
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
      console.log('number of reviews', $scope.numReviews);
    })
  };
  
  $scope.writeReview = function(){
    $location.path('/newreview');
    liveFactory.artistNameReview = artistName
  }

  $scope.toggle = function() {
    $scope.hideText = !$scope.hideText;
  };

  $scope.oneReview = function() {
    if($scope.reviewsCount === 1){
      return true;
    }
  }

  $scope.$on('$ionicView.enter', function(){
    $scope.hideText = true;
    $scope.getArtist();
    $scope.getReviews();
  });
  
}

angular.module('liveApp')
.controller('artistPageCtrl', ['$scope', '$http', '$location', '$stateParams', 'liveFactory', artistPageCtrl]);


function artistPageCtrl($scope, $http, $location, $stateParams, liveFactory){
  
  $scope.artistName = $stateParams.artistName;
  var artistName = $scope.artistName
  console.log($scope.artistName);

  $scope.getArtist = function(){
    return $http({
      method: 'GET',
      url: '/artist',
      params: {artistName: $scope.artistName}
    })
    .then(function(resp){

      $scope.artist = resp.data;
      console.log('artist for page:', $scope.artist);
    })
  };

  $scope.getArtist();

  $scope.writeReview = function(){
    $location.path('/newreview');
    liveFactory.artistNameReview = artistName
    console.log("This the answer",liveFactory.artistNameReview)
  }

  $scope.getReviews = function(){
    console.log('getReviews is invoked')
    return $http({
      method: 'GET',
      url: '/getreviews'
      // params: {artistName: $scope.artistName}
    })
    .then(function(resp){
      console.log("SET OF REVIEWS",resp.data)
      $scope.reviews = resp.data
      
      
    })
  };

  $scope.getReviews();

}

angular.module('liveApp')
.controller('artistPageCtrl', ['$scope', '$http', '$location', '$stateParams', 'liveFactory', artistPageCtrl]);


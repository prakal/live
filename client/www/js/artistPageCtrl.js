function artistPageCtrl($scope, $http, $location, $stateParams, liveFactory){
  
  $scope.artistName = $stateParams.artistName;

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
  }

}

angular.module('liveApp')
.controller('artistPageCtrl', ['$scope', '$http', '$location', '$stateParams', 'liveFactory', artistPageCtrl]);


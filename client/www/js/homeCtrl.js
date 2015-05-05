function homeCtrl($scope, $http, liveFactory){
  
   $scope.getAllArtists = function(){
    return $http({
      method: 'GET',
      url: '/art'
    })
    .then(function(resp){
      $scope.artists = resp.data;
      console.log('artists in client:', $scope.artists);
    })
  };

  $scope.getAllArtists();

  $scope.getNewArtist = liveFactory.getNewArtist;

}

angular.module('liveApp')
.controller('homeCtrl', ['$scope', '$http', 'liveFactory', homeCtrl]);

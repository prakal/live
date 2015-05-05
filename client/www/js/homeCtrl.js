function homeCtrl($scope, $http, $location, liveFactory){
  
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

  $scope.artistPagefromHome = function(path){
    console.log("shit");
    $location.path('/artist/' + path);
  }

  $scope.max = 5;

  $scope.getAllArtists();

  $scope.getNewArtist = liveFactory.getNewArtist;
}

angular.module('liveApp')
.controller('homeCtrl', ['$scope', '$http', '$location', 'liveFactory', homeCtrl]);

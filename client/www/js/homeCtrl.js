function homeCtrl($scope, $location, liveFactory){
  
  $scope.artistPagefromHome = function(path){
    $location.path('/artist/' + path);
  };

  $scope.max = 5;

  $scope.obj = liveFactory;
  $scope.obj.getAllArtists();
}

angular.module('liveApp')
.controller('homeCtrl', ['$scope', '$location', 'liveFactory', homeCtrl]);

function mainCtrl($scope, $location, liveFactory){

  $scope.q="";

  $scope.goHome = function(){
    $location.path('/');
    $scope.query = null;
    $scope.q = null;
    liveFactory.getAllArtists();
  }

  $scope.artistsSearch = function(){
    $scope.q = $scope.query;
    liveFactory.artist = $scope.query;
    $location.path('/');
    $scope.query = null;
  }

  $scope.obj = liveFactory;

}

angular.module('liveApp')
.controller('mainCtrl', ['$scope', '$location', 'liveFactory', mainCtrl]);

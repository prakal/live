function homeCtrl($scope, $location, liveFactory){
  
  $scope.artistPagefromHome = function(path){
    $location.path('/artist/' + path);
  };

  $scope.max = 5;

  $scope.obj = liveFactory;
  $scope.obj.getAllArtists();

  $scope.oneReview = function(artist){
    if(artist.reviewcount === 1){
      return true;
    }
  }

}

angular.module('liveApp')
.controller('homeCtrl', ['$scope', '$location', 'liveFactory', homeCtrl]);

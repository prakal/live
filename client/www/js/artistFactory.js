function artistFactory($http, $location){

  var artistFactory = {};

  var artistNameReview;

  artistFactory.getArtist = function(){
    return $http({
      method: 'GET',
      url: '/artist',
      params: {artistName: $scope.artistName}
    })
    .then(function(resp){
      $scope.showText = false;
      $scope.artist = resp.data;
    })
  };

  return artistFactory;
}

angular.module('liveApp')
.factory('artistFactory', ['$http', '$location', artistFactory]);
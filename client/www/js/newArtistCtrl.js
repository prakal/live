function newArtistCtrl($scope, $http, $location, liveFactory){
 
  $scope.showURL = false;

  $scope.$on('$ionicView.enter', function(){
    var chosenArtist = liveFactory.chosenArtist;
    $scope.artist = {
      artistName: chosenArtist.name,
      artistPic: chosenArtist.images[2].url,
      genre: chosenArtist.genres[0]
    }
  $scope.getBio();
  });

  $scope.getBio = function(){
    return $http({
      method: 'GET',
      url: 'http://developer.echonest.com/api/v4/artist/biographies?api_key=B3ZCIXZI6PRDM766O&format=json&name=' + $scope.artist.artistName
    })
    .then(function(resp){
      $scope.artist.bio = resp.data.response.biographies[0].text.substring(0, 600) + '...';
      console.log('artist bio:', $scope.artist.bio);
    })
  };


  $scope.saveArtist = function (){
    return $http({
      method: 'POST',
      url: '/newartist',
      data: $scope.artist
    })
    .then(function (resp) {
      $location.path('/artist/' + $scope.artist.artistName);
      return resp.data;
      });
  };
}

angular.module('liveApp')
.controller('newArtistCtrl', ['$scope', '$http', '$location', 'liveFactory', newArtistCtrl]);
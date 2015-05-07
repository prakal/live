function newArtistCtrl($scope, $http, $location, liveFactory){
 
  var chosenArtist = liveFactory.chosenArtist;
 
  $scope.artist = {
    artistName: chosenArtist.name,
    artistPic: chosenArtist.images[2].url,
    genre: chosenArtist.genres[0]
    // bio: ,
  }

  $scope.saveArtist = function (){
    console.log('test', liveFactory.chosenArtist);
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



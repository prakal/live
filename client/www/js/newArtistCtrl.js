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
      url: 'https://developer.echonest.com/api/v4/artist/biographies?api_key=B3ZCIXZI6PRDM766O&format=json&name=' + $scope.artist.artistName
    })
    .then(function(resp){
      $scope.artist.bio = resp.data.response.biographies[0].text.substring(0, 600) + '...';
    })
  };

/*we are creating a new artist to store the info of the chosenArtist, which is the artist the user choose from the results of the
spotify api call */
  $scope.artist = {
    artistName: chosenArtist.name,
    artistPic: chosenArtist.images[2].url,
    genre: chosenArtist.genres[0]
    // bio: ,
  }
//saves the newly created artist object to the Artist table after the user submits the newArtist form 

  $scope.saveArtist = function (){
    return $http({
      method: 'POST',
      url: '/newartist',
      data: $scope.artist
    })
    .then(function (resp) {
      //serves up the page for the new artist 
      $location.path('/artist/' + $scope.artist.artistName);
      return resp.data;
      });
  };
}

angular.module('liveApp')
.controller('newArtistCtrl', ['$scope', '$http', '$location', 'liveFactory', newArtistCtrl]);
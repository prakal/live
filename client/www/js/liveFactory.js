function liveFactory($http, $location){

  var liveFactory = {};
  liveFactory.hideMainHeader = false;

// in the index.html we are listening to hideMainHeader to hide or show the header 
  liveFactory.toggleHeader = function(){
    liveFactory.hideMainHeader = !liveFactory.hideMainHeader;
    console.log('hide main header', liveFactory.hideMainHeader);
  };
// get all the artists from the the artist table and store in liveFactory.artists
  liveFactory.getAllArtists = function(){
    return $http({
      method: 'GET',
      url: '/art'
    })
    .then(function(resp){
      liveFactory.artists = resp.data;
    })
  };
// get an artist's info from Spotify, if there are more than one matching artists from Spotify
// then we go to the results page to display all the returned artists, otherwise serve a blank
// new artist form 

  liveFactory.getNewArtist = function(){
    return $http({
      method: 'GET',
      url: 'https://api.spotify.com/v1/search?q=' + liveFactory.artist + '&type=artist',
    })
    .then(function(resp){
      liveFactory.results = resp.data.artists;

      if(liveFactory.results.items.length > 0){
        $location.path('/results');
      }
      else {
        $location.path('/newartist');
      }
    })
  };
//serves up the newartist page, new artist form
  liveFactory.pickArtist = function(){
    $location.path('/newartist');
  }

  return liveFactory;
}

angular.module('liveApp')
.factory('liveFactory', ['$http', '$location', liveFactory]);

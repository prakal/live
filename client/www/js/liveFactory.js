function liveFactory($http, $location){

  var liveFactory = {};
  liveFactory.hideMainHeader = false;

  liveFactory.toggleHeader = function(){
    liveFactory.hideMainHeader = !liveFactory.hideMainHeader;
    console.log('hide main header', liveFactory.hideMainHeader);
  };

  liveFactory.getAllArtists = function(){
    return $http({
      method: 'GET',
      url: '/art'
    })
    .then(function(resp){
      liveFactory.artists = resp.data;
    })
  };

  liveFactory.getNewArtist = function(){
    console.log('liveFactory.artist', liveFactory.artist);
    return $http({
      method: 'GET',
      url: 'https://api.spotify.com/v1/search?q=' + liveFactory.artist + '&type=artist',
    })
    .then(function(resp){
      liveFactory.results = resp.data.artists;
      // console.log('liveFactory.results', liveFactory.results);
      if(liveFactory.results.items.length > 0){
        $location.path('/results');
      }
      else {
        $location.path('/newartist');
      }
    })
  };

  liveFactory.pickArtist = function(){
    $location.path('/newartist');
  }

  return liveFactory;
}

angular.module('liveApp')
.factory('liveFactory', ['$http', '$location', liveFactory]);

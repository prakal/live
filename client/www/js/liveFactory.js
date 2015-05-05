function liveFactory($http, $location){

  var liveFactory = {};

  liveFactory.getNewArtist = function(){
    console.log('heres the artist:', liveFactory.artist);
    return $http({
      method: 'GET',
      url: 'https://api.spotify.com/v1/search?q=' + liveFactory.artist + '&type=artist',
    })
    .then(function(resp){
      liveFactory.artists = resp.data.artists;
      console.log('new artist:', liveFactory.artists.items);

      if(liveFactory.artists.items.length > 0){
        console.log('takes you to results page');
        $location.path('/results');
      }
      else {
        console.log('takes you to blank create artist page');
      }

    })
  };

  return liveFactory;
}

angular.module('liveApp')
.factory('liveFactory', ['$http', '$location', liveFactory]);

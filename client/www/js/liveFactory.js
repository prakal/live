function liveFactory($http, $location){

  var liveFactory = {};

  var artistNameReview 
  
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
        console.log('takes you to blank create artist page');
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

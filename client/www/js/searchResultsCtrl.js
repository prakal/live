//controller for the spotify search result
function searchResultsCtrl($scope, $location, liveFactory){

  $scope.$on('$ionicView.enter', function(){
    $scope.searchQuery = liveFactory.artist;
    $scope.searchResults = liveFactory.results.items;
  });

  //This function is invoked when the user choses an artist Spotify result list
  $scope.pickArtist = function(item){
    liveFactory.chosenArtist = item;
    liveFactory.pickArtist();// displays the picked artist page
  };

}

angular.module('liveApp')
.controller('searchResultsCtrl', ['$scope', '$location', 'liveFactory', searchResultsCtrl]);

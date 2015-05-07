function searchResultsCtrl($scope, $location, liveFactory){

  $scope.searchQuery = liveFactory.artist;
  $scope.searchResults = liveFactory.results.items;

  $scope.pickArtist = function(item){
    liveFactory.chosenArtist = item;
    liveFactory.pickArtist();
  }
}

angular.module('liveApp')
.controller('searchResultsCtrl', ['$scope', '$location', 'liveFactory', searchResultsCtrl]);
function searchResultsCtrl($scope, $location, liveFactory){

  $scope.searchResults = liveFactory.results.items;

  $scope.pickArtist = function(item){
    liveFactory.chosenArtist = item;
    liveFactory.pickArtist();
  }
}

angular.module('liveApp')
.controller('searchResultsCtrl', ['$scope', '$location', 'liveFactory', searchResultsCtrl]);
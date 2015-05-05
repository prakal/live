function searchResultsCtrl($scope, $location, liveFactory){

  $scope.searchResults = liveFactory.artists.items;

}

angular.module('liveApp')
.controller('searchResultsCtrl', ['$scope', '$location', 'liveFactory', searchResultsCtrl]);
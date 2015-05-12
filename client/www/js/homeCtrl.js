//controller for home.html
function homeCtrl($scope, $location, liveFactory){
  // This is invoked when someone clicks on an artist in the home view,
  // it takes the artist's name as a parameter, and brings up that artist's page
  $scope.artistPagefromHome = function(path){
    $location.path('/artist/' + path);
  };

  $scope.max = 5;
  // this is the factory we use to share functions between each controller
  $scope.obj = liveFactory;
  // everytime we visit the home view, this pulls all the artists from our database
  $scope.obj.getAllArtists();

  //This is a function that is invoked each time an artist page is served up. It checks to see
  //how many reviews an artist has in-order to determine whether or not to add an s to "review".
  //Refer to the ng-hide directive in home view template.
  $scope.oneReview = function(artist){
    if(artist.reviewcount === 1){
      return true;
    }
  };

}

angular.module('liveApp')
.controller('homeCtrl', ['$scope', '$location', 'liveFactory', homeCtrl]);

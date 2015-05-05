function newArtistCtrl($scope, $http){
  $scope.artist = {
    name: "Drake",
    picture: "http://www.billboard.com/files/media/drake-cover-990.jpg",
    genre: "Hip-hop",
    bio: "Canadian Jewish Rapper"
  }
}

angular.module('liveApp')
.controller('newArtistCtrl', ['$scope', '$http', newArtistCtrl]);

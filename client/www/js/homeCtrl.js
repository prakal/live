function homeCtrl($scope, $http){


  $scope.getAllArtists = function(){
    return $http({
      method: 'GET',
      url: '/art'
    })
    .then(function(resp){
      $scope.artists = resp.data;
      console.log('artists in client:', resp.data);
    })
  };

  $scope.getAllArtists();

  // $scope.bands = [
  //   {
  //     name: 'Blink 182',
  //     venue: 'Slims',
  //     rating: 4
  //   },
  //   {
  //     name: 'Katy Perry',
  //     venue: 'Bill Graham Auditorium',
  //     rating: 1
  //   },
  //   {
  //     name: 'Blink 182',
  //     venue: 'Slims',
  //     rating: 4
  //   },
  //   {
  //     name: 'Katy Perry',
  //     venue: 'Bill Graham Auditorium',
  //     rating: 1
  //   },
  //   {
  //     name: 'Blink 182',
  //     venue: 'Slims',
  //     rating: 4
  //   },
  //   {
  //     name: 'Katy Perry',
  //     venue: 'Bill Graham Auditorium',
  //     rating: 1
  //   },
  //    {
  //     name: 'Blink 182',
  //     venue: 'Slims',
  //     rating: 4
  //   },
  //   {
  //     name: 'Katy Perry',
  //     venue: 'Bill Graham Auditorium',
  //     rating: 1
  //   }
  // ];

}

angular.module('liveApp')
.controller('homeCtrl', ['$scope', '$http', homeCtrl]);

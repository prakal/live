function homeCtrl($scope){
  $scope.bands = [
    {
      name: 'Blink 182',
      venue: 'Slims',
      rating: 4
    },
    {
      name: 'Katy Perry',
      venue: 'Bill Graham Auditorium',
      rating: 1
    },
    {
      name: 'Blink 182',
      venue: 'Slims',
      rating: 4
    },
    {
      name: 'Katy Perry',
      venue: 'Bill Graham Auditorium',
      rating: 1
    },
    {
      name: 'Blink 182',
      venue: 'Slims',
      rating: 4
    },
    {
      name: 'Katy Perry',
      venue: 'Bill Graham Auditorium',
      rating: 1
    },
     {
      name: 'Blink 182',
      venue: 'Slims',
      rating: 4
    },
    {
      name: 'Katy Perry',
      venue: 'Bill Graham Auditorium',
      rating: 1
    }
  ];

}

angular.module('liveApp')
.controller('homeCtrl', homeCtrl);

function reviewCreateCtrl($scope, $http, $location){
 
  $scope.review = {}

  var review = $scope.review

  $scope.postReview = function (){
    
    $location.path('/');
    
    return $http({
      method: 'POST',
      url: '/newreview',
      data: $scope.review
    })
    .then(function (resp) {
      console.log('response data:', resp.data);
      return resp.data;
    });

    review = {};
  };
}

angular.module('liveApp')
.controller('reviewCreateCtrl', ['$scope', '$http', '$location', reviewCreateCtrl]);
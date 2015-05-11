function reviewCreateCtrl($scope, $http, $location, liveFactory){
  
  $scope.review = {};
  $scope.max = 5;

  liveFactory.toggleHeader();

  $scope.review.artistName = liveFactory.artistNameReview;

  $scope.goBack = function(){
    liveFactory.toggleHeader();
    $location.path('/artist/' + $scope.review.artistName);
  }

  $scope.postReview = function (){
    return $http({
      method: 'POST',
      url: '/newreview',
      data: $scope.review
    })
    .then(function (resp) {
      console.log('response data:', resp.data);
      $scope.getAvgRating();
      return resp.data;
    });
  };

  // Retrieve average rating from all reviews of that artist
  $scope.getAvgRating = function(){
    return $http({
      method: 'GET',
      url: '/getAvgRating',
      params: {artistName: $scope.review.artistName}
    })
    .then(function(resp){
      $scope.obj = {};
      console.log('response', resp);
      $scope.obj.avgrating = resp.data[0]['avg'];
      $scope.updateAvgRating();
      console.log('router - avg rating:', $scope.obj);
    });
  };

  // Write Avg. Ratings to Artist DB
  $scope.updateAvgRating = function (){
    return $http({
      method: 'POST',
      url: '/updateAvgRating',
      params: {artistName: $scope.review.artistName},
      data: $scope.obj
    })
    .then(function(resp){
      console.log('router - updated avg rating:', resp.data);
      $location.path('/artist/' + $scope.review.artistName);
      liveFactory.toggleHeader();
    });
  };

}

angular.module('liveApp')
.controller('reviewCreateCtrl', ['$scope', '$http', '$location', 'liveFactory', reviewCreateCtrl]);


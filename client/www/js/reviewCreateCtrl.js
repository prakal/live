function reviewCreateCtrl($scope, $http, $location,liveFactory){
  
  $scope.review = {}

  $scope.review.artistName = liveFactory.artistNameReview
  var review = $scope.review

  $scope.back = function(){
    window.history.back();
  }

  $scope.postReview = function (){
    console.log("post review works")
    console.log("this",liveFactory.artistNameReview)
    $scope.back();
    console.log($scope.review)
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
    liveFactory.artistNameReview = "";
  };
}

angular.module('liveApp')
.controller('reviewCreateCtrl', ['$scope', '$http', '$location','liveFactory', reviewCreateCtrl]);


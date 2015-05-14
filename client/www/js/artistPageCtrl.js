function artistPageCtrl($scope, $http, $location, $stateParams, liveFactory, $cordovaCapture){
  // $stateParams grabs the artistName from the url
  // when someone clicks on the artist from the home view
  $scope.artistName = $stateParams.artistName;

  var artistName = $scope.artistName;
  // max 5 stars
  $scope.max = 5;
// Send a GET request that contains artist name as a parameter to /artist
// and returns artist information
  $scope.getArtist = function(){
    return $http({
      method: 'GET',
      url: '/artist',
      params: {artistName: $scope.artistName}
    })
    .then(function(resp){
      $scope.artist = resp.data;

      // recalculate the average rating of the artist
      $scope.roundedRating = Math.round($scope.artist.avgRating);
      //refer to ng-hide in the span tag of the view, checks if there's only one review
      //hides the s from 'reviews' if there's only one review

      $scope.oneReview = function() {
        if($scope.artist.reviewcount === 1){
          return true;
        }
      };
      // refer to ng-hide and ng-show inside <button>
      //if revivewCount is 0 then show "be first to review!"
      // if reviewCOunt is greater than 0 show "leave a review!"
      $scope.reviewsExist = function() {
        return $scope.artist.reviewcount;
      };
    });
  };
// get reviews of the artist by passing in the artistname as a parameter
//and select the corresponding row from the reviews table, and set the
//review and reviewsCount variables to be used in the view
  $scope.getReviews = function(){
    return $http({
      method: 'GET',
      url: '/getreviews',
      params: {artistName: $scope.artistName}
    })
    .then(function(resp){
      $scope.reviews = resp.data.rows;
    });
  };
 // serves up the new review page for the artist
  $scope.writeReview = function(){
    $location.path('/newreview');
    liveFactory.artistNameReview = artistName;
  };

//toggle function for artist bio, not yet integrated
  $scope.toggle = function() {
    $scope.hideText = !$scope.hideText;
  };

  $scope.playVideo = function(review, event){
    console.log('clicked');
  };

  $scope.recordVideo = function(){
    console.log('record video');
    //window.addEventListener('DOMContentLoaded', function() {
      var v = document.getElementById('v');
      navigator.getUserMedia = (navigator.getUserMedia || 
        navigator.webkitGetUserMedia || 
        navigator.mozGetUserMedia || 
        navigator.msGetUserMedia);
      if (navigator.getUserMedia) {
        // Request access to video only
        navigator.getUserMedia(
          {
            video:true,
            audio:false
          },        
          function(stream) {
            var url = window.URL || window.webkitURL;
            v.src = url ? url.createObjectURL(stream) : stream;
            v.play();
          },
          function(error) {
            alert('Something went wrong. (error code ' + error.code + ')');
              return;
            }
        );
      }
      else {
        alert('Sorry, the browser you are using doesn\'t support getUserMedia');
        return;
      }
    //});
  };

//when the view page is loaded, the function invokes the functions within
// to show the artist info and the reviews associated with the artists
  $scope.$on('$ionicView.enter', function(){
    $scope.hideText = true;
    $scope.getArtist();
    $scope.getReviews();
  });


}

angular.module('liveApp')
.controller('artistPageCtrl', ['$scope', '$http', '$location', '$stateParams', 'liveFactory', artistPageCtrl]);


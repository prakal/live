// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('liveApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/')

    $stateProvider.state('home', {
      url: '/',
      templateUrl: './views/home.html',
      controller: 'homeCtrl'
    })

    $stateProvider.state('newArtist', {
      url: '/newartist',
      templateUrl: './views/newArtist.html',
      controller: 'newArtistCtrl'
    })

    // Search results from calling Spotify API to create a new artist
    $stateProvider.state('searchResults', {
      url: '/results',
      templateUrl: './views/searchResults.html',
      controller: 'searchResultsCtrl'
    })
    
    //Route for review creation.
    $stateProvider.state('newReview', {
      url: '/newreview',
      templateUrl: './views/reviewCreate.html',
      controller: 'reviewCreateCtrl'
    })

});


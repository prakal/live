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
      templateUrl: './views/home.html'               //Need to consider location of views
    })

    $stateProvider.state('artistCreate', {
      url: '/create',
      templateUrl: './views/artistCreate.html'           //Needs to be added to views
    })

})







  // $routeProvider
  // .when('/', {
  //   templateUrl: './views/home.html',
  //   controller: 'HomeCtrl'
  // })

  // .when('/create', {
  //   templateUrl: './views/home.html',
  //   controller: 'HomeCtrl'
  // })

  // .otherwise({
  //   redirectTo: '/'
  // })


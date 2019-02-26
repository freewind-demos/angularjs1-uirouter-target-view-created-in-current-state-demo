const app = angular.module('app', ['ui.router'])

app.config(($stateProvider, $urlRouterProvider) => {

  $stateProvider.state('grandparent', {
    url: '/grandparent',
    templateUrl: './templates/grandparent.html'
  });

  $stateProvider.state('grandparent.parent', {
    url: '/parent',
    views: {
      head: {
        templateUrl: './templates/parent-head.html'
      },
      body: {
        templateUrl: './templates/parent-body.html'
      },
    }
  });

  $stateProvider.state('grandparent.parent.child', {
    url: '/child',
    views: {
      head: {
        templateUrl: './templates/child-head.html'
      },
      body: {
        templateUrl: './templates/child-body.html'
      },
    }
  });

  $stateProvider.state('grandparent.parent.naughtyChild', {
    url: '/naughty-child',
    views: {
      'head@^.^': {
        templateUrl: './templates/child-head.html'
      },
      body: {
        templateUrl: './templates/child-body.html'
      },
    }
  });

  $urlRouterProvider.otherwise('/grandparent');

});


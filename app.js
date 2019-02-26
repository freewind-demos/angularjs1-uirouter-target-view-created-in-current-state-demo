const app = angular.module('app', ['ui.router'])

app.config(($stateProvider, $urlRouterProvider) => {

  $stateProvider.state('pa', {
    url: '/page-a',
    views: {
      $default: {
        templateUrl: './templates/page.html'
      },
      message: {
        template: 'Hello UIRouter!'
      }
    }
  });

  $stateProvider.state('pb', {
    url: '/page-b',
    views: {
      $default: {
        templateUrl: './templates/page.html'
      },
      'message@.': {
        template: 'Hello UIRouter!'
      }
    }
  });


  $urlRouterProvider.otherwise('/page-a');

});


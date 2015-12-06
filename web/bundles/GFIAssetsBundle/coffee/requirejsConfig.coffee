requirejs.config
  'baseUrl': assetPath + '/'
  'paths':
    'angular': 'bower_components/angular/angular.min',
    'jquery': 'bower_components/jquery/dist/jquery.min'
  'shim':
    'angular': ['jquery']
requirejs ['js/main.min']
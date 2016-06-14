require('angular');

var AppController = require('./controllers/AppController');
 
var app = angular.module('app', []);
app.controller('AppController', ['$scope', AppController]);
'use strict';
// Dynamic Poll App Module
var dynamicPollApp = angular.module('dynamicPollApp', [
		'ngRoute',
		'dynamicPollControllers',
		'dynamicPollServices'
	]);
// Route Provider
dynamicPollApp.config(['$routeProvider',
		function($routeProvider){
			$routeProvider.
				when('/', {
					templateUrl: 'polls/createPoll.html',
					controllers: 'dynamicPollController'
				}).
				when('/created/', {
					templateUrl: 'polls/pollCreated.html'
				});
		}
	]);
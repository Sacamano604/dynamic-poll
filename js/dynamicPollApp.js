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
					controllers: 'createPollController'
				}).
				when('/created/:poll_id', {
					templateUrl: 'polls/createdPoll.html',
					controllers: 'createdPollController'
				});
		}
	]);
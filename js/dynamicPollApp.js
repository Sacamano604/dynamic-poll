'use strict';
// Dynamic Poll App Module
var dynamicPollApp = angular.module('dynamicPollApp', [
		'ngRoute'
	]);
// Route Provider
dynamicPollApp.config(['$routeProvider',
		function($routeProvider){
			$routeProvider.
				when('/', {
					templateUrl: 'polls/createPoll.html'
				});
		}
	]);
'use strict';

// Controller Module
var dynamicPollControllers = angular.module('dynamicPollControllers', []);

// Controller for creating a poll
dynamicPollControllers.controller('createPollController', ["$scope", "$http", "$location", "pollService", "assembleFormDataService",
	function ($scope, $http, $location, pollService, assembleFormDataService){
		$scope.createPoll = function(){
			var readyFormData = assembleFormDataService.populateFormData($scope.pollname, $scope.option1, $scope.option2, $scope.option3, $scope.option4, $scope.option5);
				pollService.createPoll(readyFormData, function(){
					$location.path('/created');
				})
		}
	}
]);


'use strict';

// Controller Module
var dynamicPollControllers = angular.module('dynamicPollControllers', []);

// Controller for creating a poll
dynamicPollControllers.controller('createPollController', ["$scope", "$http", "pollService", "assembleFormDataService",
	function (){
		$scope.createPoll = function(){
			var readyFormData = assembleFormDataService.populateFormData($scope.pollname, $scope.option1, $scope.option2, $scope.option3, $scope.option4, $scope.option5);
				dynamicPollService.createPoll(readyFormData, function(){
					$location.path('/created');
				})
		}
	};
]);


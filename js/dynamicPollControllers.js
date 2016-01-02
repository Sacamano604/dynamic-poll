'use strict';

// Controller Module
var dynamicPollControllers = angular.module('dynamicPollControllers', []);

// Controller for creating a poll
dynamicPollControllers.controller('createPollController', ["$scope", "$http", "$location", "pollService", "assembleFormDataService",
	function ($scope, $http, $location, pollService, assembleFormDataService){
		$scope.createPoll = function(){
			var readyFormData = assembleFormDataService.populateFormData($scope.pollname, $scope.option1, $scope.option2, $scope.option3, $scope.option4, $scope.option5);
				pollService.createPoll(readyFormData, function(data){
					$location.path('/vote/' + data);
				});
		};
}]);

dynamicPollControllers.controller('createdPollController', ["$scope", "$routeParams", "pollService",
	function ($scope, $routeParams, pollService) {
		pollService.viewPoll($routeParams.poll_id, function(data){
			$scope.poll = data;
		});
	}
]);

dynamicPollControllers.controller('voteonPollController', ["$scope", "$routeParams", "pollService",
	function ($scope, $routeParams, pollService) {
		pollService.viewPoll($routeParams.poll_id, function(data){
			$scope.poll = data;
		});
		$scope.activateButton = function(name) { 
			$scope.active = name; 
		}
		$scope.voteonPoll = function(id, vote){
			$scope.passedVote = [
				{poll_id: id, voteOption: vote}
			];
			$scope.json = angular.toJson($scope.passedVote);
			console.log($scope.json);
			pollService.voteonPoll($routeParams.poll_id, vote, function(data){
				console.log('success');
			});
		};
	}
]);


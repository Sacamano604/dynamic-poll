'use strict';
// Controller Module
var dynamicPollControllers = angular.module('dynamicPollControllers', []);
// Controller for creating a poll
dynamicPollControllers.controller('createPollController', ["$scope", "$location", "pollService", "assembleFormDataService",
	function ($scope, $location, pollService, assembleFormDataService){
		$scope.createPoll = function(){
			var readyFormData = assembleFormDataService.populateFormData($scope.pollname, $scope.option1, $scope.option2, $scope.option3, $scope.option4, $scope.option5);
				pollService.createPoll(readyFormData, function(data){
					$location.path('/vote/' + data);
				});
		};
}]);
// Viewing the created poll. Controller name should be viewPollController or something like that
dynamicPollControllers.controller('createdPollController', ["$scope", "$routeParams", "$interval", "pollService",
	function ($scope, $routeParams, $interval, pollService) {
		//Fetch the data from the DB
		pollService.viewPoll($routeParams.poll_id, function(data){
				$scope.poll = data;
			});
		//Then do it again on a 2 second interval
		$interval(function(){
			pollService.viewPoll($routeParams.poll_id, function(data){
				$scope.poll = data;
			});
	}, 2000);
}]);
//vote on poll controller. Handles displaying the poll options, copying the link to share, and the posting of the vote cast
dynamicPollControllers.controller('voteonPollController', ["$scope", "$location", "$routeParams", "pollService",
	function ($scope, $location, $routeParams, pollService) {
		pollService.viewPoll($routeParams.poll_id, function(data){
			$scope.poll = data;
		});
		$scope.activateButton = function(name) { 
			$scope.active = name; 
		};
		$scope.voteonPoll = function(id, vote){
			pollService.voteonPoll($routeParams.poll_id, vote, function(data){
				$location.path('/created/' + $routeParams.poll_id);
			});
		};
	}
]);
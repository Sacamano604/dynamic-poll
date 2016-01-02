'use strict';

angular.module('dynamicPollServices', [])

// Factory responsible for assembling the form data before it's passed over to the php
.factory('assembleFormDataService', function(){
	return {
		populateFormData: function(pollname, option1, option2, option3, option4, option5){
			var formData = new FormData();
			formData.append("pollname", pollname);
			formData.append("option1", option1);
			formData.append("option2", option2);
			formData.append("option3", option3);
			formData.append("option4", option4);
			formData.append("option5", option5);
			return formData;
		}
	};
})
// Factory service that handles components needed for polls 
.factory('pollService', ['$http', function($http){
	return {
		createPoll: function(readyFormData, callback){
			$http.post('polls/polls.php?action=createPoll', readyFormData, { transformRequest: angular.identity, headers: { "Content-Type": undefined } }).success(function(response){
				callback(response.poll_id);
			});
		},
		viewPoll: function(id, callback){
			$http.get('polls/polls.php?action=viewPoll&poll_id=' + id).success(callback);
		},
		voteonPoll: function(){
			
		}
	}
}]);








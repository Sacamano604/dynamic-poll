'use strict';

angular.module('dynamicPollServices', [])

// Factory responsible for assembling the form data before it's passed over to the php
.factory('assembleFormDataService', function(){
	return {
		populateFormData: function(){
			var formData = new formData();
				formData.append("pollname", pollname);
				formData.append("option1", option1);
				formData.append("option2", option2);
				formData.append("option3", option3);
				formData.append("option4", option4);
				formData.append("option5", option5);
		}
	};
})
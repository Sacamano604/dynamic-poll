'use strict';

//Directive that makes sure any 'value' attribute assigned to an input field is bound correctly
dynamicPollControllers.directive('input', function($parse){
	return {
		restrict: 'E',
		require: '?ngModel',
		link: function(scope, element, attrs) {
			if (attrs.ngModel && attrs.value) {
				$parse(attrs.ngModel).assign(scope, attrs.value);
			}
		}
	};
});



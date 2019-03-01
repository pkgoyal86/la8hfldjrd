angular.module('starter.controllers').controller('ThanksCtrl', function($rootScope,$scope,$http,$ionicLoading,$state,$ionicPopup) {
	
	$scope.show_message	= 'Thank you for your business, we look forward to creating a Lush Green Lawn.';
	
	
	$scope.submitData = function()
	{
		$state.go('app.dashboard');
	}
})
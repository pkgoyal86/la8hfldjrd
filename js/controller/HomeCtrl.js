angular.module('starter.controllers').controller('HomeCtrl', function($rootScope,$scope,$http,$ionicLoading,$state,$ionicPopup) {



	if(localStorage.getItem("LoginUserID"))
	{
		$state.go('app.dashboard');
	}else{
		$state.go('app.login');
	}



})

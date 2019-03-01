angular.module('starter.controllers').controller('enterUserInfoCtrl', function ($rootScope,$scope,$http,$state,$ionicHistory,$ionicLoading,$window,$timeout,$ionicSideMenuDelegate,$window,$stateParams,$ionicPush,$ionicPopup) {
	$scope.currState = $state;
    var currentState = $state.current.name;
	var LoginUserPhone	=	localStorage.getItem("LoginUserPhone");
	var LoginUserToken	=	localStorage.getItem("LoginUserToken");
	if(localStorage.getItem("LoginUserToken") && localStorage.getItem("LoginUserPhone")){
			
	}else{
		$state.transitionTo('app.phone_login',{}, {
			reload: false,
			inherit: false,
			notify: true
		});
	}	
	$ionicPush.register().then(function(t) {
		localStorage.setItem("android_device_id",t.token);
		
	});
	$scope.user={};
	
	
	
	$scope.submitData = function()
	{
		$scope.ApiRespnsMsgShow = false;
		
		
		
		
		$scope.user.Action	=	4;
		$scope.user.Phone	=	LoginUserPhone;
		$scope.user.Token	=	LoginUserToken;
		var params = JSON.stringify($scope.user);
		var url	=	SiteUrl+"/getclientpay?data="+params;
		$http({
        method : "GET",
        url : url,
		}).then(function mySuccess(response) {
			if(response.data.RepCode == 0){
				$state.go('app.dashboard');
			}else{
				var alertPopup = $ionicPopup.alert({
				 title: response.data.Value,
				 template: '',
				   cssClass: 'myPopup2',
				 type: 'button-default',
			  });
			}
			//$state.go('app.verify_phone');
		}, function myError(response) {
			myJSON = JSON.stringify(response); 
			console.log(myJSON);
		});
		
		



	}
	
})
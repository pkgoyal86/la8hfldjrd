angular.module('starter.controllers').controller('phoneLoginCtrl', function ($rootScope,$scope,$http,$state,$ionicHistory,$ionicLoading,$window,$timeout,$ionicSideMenuDelegate,$window,$stateParams,$ionicPush,$ionicPopup) {
	$scope.currState = $state;
    var currentState = $state.current.name;
	if(currentState == 'app.login'){
		$rootScope.backbuttonshow = false;
	}else if(currentState == 'app.phone_login'){
		$rootScope.backbuttonshow = true;
	}	
	$ionicPush.register().then(function(t) {
		localStorage.setItem("android_device_id",t.token);
		
	});
	$scope.user={};
	
	/* if(localStorage.getItem("LoginUserID"))
	{
		$state.go('app.home');
	} */
	
	$scope.submitData = function()
	{
		$scope.ApiRespnsMsgShow = false;
		
		
		
		
		$scope.user.Action	=	2;
		var params = JSON.stringify($scope.user);
		var url	=	SiteUrl+"/getclientpay?data="+params;
		$http({
        method : "GET",
        url : url,
		}).then(function mySuccess(response) {
			if(response.data.RepCode == 0){
				$state.go('app.verify_phone',{'Phone': $scope.user.Phone});
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
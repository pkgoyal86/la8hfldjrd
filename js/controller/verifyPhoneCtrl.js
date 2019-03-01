angular.module('starter.controllers').controller('verifyPhoneCtrl', function($scope, $stateParams,$ionicPlatform,$http,$cordovaContacts,$cordovaSocialSharing,$state,$ionicPopup) {
	
	var Phone	=	$stateParams.Phone;
	
	$scope.moveFocus = function(num)
	{
		 document.getElementById("phone_number_code"+num).focus();
	}
	
	$scope.user= {};
	$scope.user1= {};
	$scope.verifycode = function()
	{
		var  params = JSON.stringify($scope.user);
		var phone_number_code= $scope.user.phone_number_code1.toString() + $scope.user.phone_number_code2.toString() + $scope.user.phone_number_code3.toString() + $scope.user.phone_number_code4.toString();
		console.log(phone_number_code);
		
		$scope.user1.Action	=	3;
		$scope.user1.Phone	=	Phone;
		$scope.user1.Code	=	phone_number_code;
		var params = JSON.stringify($scope.user1);
		var url	=	SiteUrl+"/getclientpay?data="+params;
		$http({
        method : "GET",
        url : url,
		}).then(function mySuccess(response) {
			 if(response.data.RepCode == 0){
				localStorage.setItem("LoginUserPhone",Phone);
				localStorage.setItem("LoginUserToken",response.data.Token);
				
				$state.go('app.enter_user_info');
			}else{
				var alertPopup = $ionicPopup.alert({
				 title: response.data.Value,
				 template: '',
				   cssClass: 'myPopup2',
				 type: 'button-default',
			  });
			  
			} 
			
		}, function myError(response) {
			myJSON = JSON.stringify(response); 
			console.log(myJSON);
		});
		
		
		
	}
	
	
	
})
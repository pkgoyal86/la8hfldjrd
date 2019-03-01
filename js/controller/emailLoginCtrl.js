angular.module('starter.controllers').controller('emailLoginCtrl', function ($rootScope,$scope,$http,$state,$ionicLoading,$stateParams,$q,$ionicPush,$ionicPopup) {
	$ionicPush.register().then(function(t) {
		localStorage.setItem("android_device_id",t.token)
		
	});
	
	$scope.user={};
	$scope.subjectid =$stateParams.id; // subject id
	$scope.title =$stateParams.title;
	$scope.score  = $stateParams.wheelvalue;

	if(localStorage.getItem("LoginUserID"))
	{
		$state.go('app.home');
	}
	// $ionicLoading.show
	// ({
      // duration: 1000
    // })
	/* -------------------------------------------*/
		

	

    // This method is to get the user profile info from the facebook api
  




	$scope.submitData = function()
	{
		$ionicLoading.show();
		$scope.ApiRespnsMsgShow = false;
		
		var android_device_id	=	localStorage.getItem("android_device_id");
		
		var device_type	=	ionic.Platform.platform();
		if(device_type == 'android'){
			$scope.user.android_device_id	=	android_device_id;
			$scope.user.ios_device_id		=	'';
		}else{
			$scope.user.android_device_id	=	'';
			$scope.user.ios_device_id		=	android_device_id;
		}
                                                
		var params = JSON.stringify($scope.user);
		$http.get(SiteUrl+"/login?data="+params)
		.then(function(req_response){
			
			$ionicLoading.hide();
			if(req_response.data.message == "success"){
				$ionicLoading.hide();
				localStorage.setItem("LoginUserID", req_response.data.id);
				localStorage.setItem("LoginUserImage", req_response.data.image);
				localStorage.setItem("LoginUserFirstName", req_response.data.first_name);
				localStorage.setItem("LoginUserLastName", req_response.data.last_name);
				localStorage.setItem("UserToken", req_response.data.token);
				localStorage.setItem("TourId", req_response.data.tour_id);
				localStorage.setItem("LoginUserRole", req_response.data.role_id);
				$state.go('app.home');

			}else if(req_response.data.message == "failed"){
					var alertPopup = $ionicPopup.alert({
						 title: 'Login failed',
						 template: 'Login failed, Please retry.',
						 type: 'button-default',
					  });

					  alertPopup.then(function(res) {
						//$state.transitionTo('app.verify_phone', {'id': req_response.data.user_id});
					  });
			}
			
		});



	}

})

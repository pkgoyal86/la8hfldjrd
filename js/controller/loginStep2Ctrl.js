angular.module('starter.controllers').controller('loginStep2Ctrl', function($scope, $stateParams,$ionicPlatform,$http,$rootScope,$state) {
	
	var id	=	$stateParams.id;
	$scope.user= {};
	$scope.submitLogin2Data = function()
	{
		var  params = JSON.stringify($scope.user);
		
		var phone_number_code= $scope.user.phone_number_code;
		var username= $scope.user.username;
		$http.get(SiteUrl+"/rest/verify-phone-code-with-username/id/"+id+"/phone_number_code/"+phone_number_code+"/username/"+username)
		.then(function(req_response){    
		if(req_response)
		{
			var msg	=	req_response.data.msg;
			if(msg == 'success'){
				localStorage.setItem("UserToken",req_response.data.token);
				localStorage.setItem("LoginUserID", req_response.data.user_id);
				localStorage.setItem("LoginUserImage", req_response.data.user_image);
				localStorage.setItem("LoginUserName", req_response.data.username);
				localStorage.setItem("LoginUserSlug", req_response.data.slug);
				localStorage.setItem("topic_ids", req_response.data.topic_ids);
				localStorage.setItem("next_trial_counter_id", req_response.data.next_trial_counter_id);
				localStorage.setItem("trial_id_array", req_response.data.trial_id_array);
				//$state.go('app.home');
				$state.go('app.upload_profile_pic_first_time');
			}else{
				$scope.code2success = true;
				$scope.code2successMsg = 'Code verification failed!';
			}
			 
		}
		},
		function(data) {
			$scope.NoResponseInnerPage();
		});
	}
	
	$scope.$on('$ionicView.enter', function(){
		$scope.backbuttonshow = false;
		$rootScope.backbuttonshow = false;
    });	
	
})
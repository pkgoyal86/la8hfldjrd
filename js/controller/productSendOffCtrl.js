angular.module('starter.controllers').controller('productSendOffCtrl', function($scope, $stateParams,$ionicPlatform,$http,$cordovaContacts,$cordovaSocialSharing,$state,$ionicPopup,$ionicLoading) {
	
	var id	=	$stateParams.id;
	$scope.user={};
	
	
	
		
	var url	=	SiteUrl+"/product_detail/"+id;
		$http({
        method : "GET",
        url : url,
		}).then(function mySuccess(response) {
			if(response.data){
				$scope.data	=	response.data;
			}
			
		}, function myError(response) {
			myJSON = JSON.stringify(response); 
			console.log(myJSON);
		});
	$scope.submitData = function()
	{
		$ionicLoading.show();
		$scope.ApiRespnsMsgShow = false;
		
		
		
		var params = JSON.stringify($scope.user);
		console.log(params);
		
		
		$http.get(SiteUrl+"/product_update?data="+params)
		.then(function(req_response){
			
			console.log(req_response.data.message);
			if(req_response.data.message == "success"){
				
				$ionicLoading.hide();
				var alertPopup = $ionicPopup.alert({
					 title: 'Success',
						 template: 'Product is updated successfully.',
						 type: 'button-default',
					  });

					  alertPopup.then(function(res) {
						$state.transitionTo('app.dashboard');
					  });

			}else if(req_response.data.message == "failed"){
				$ionicLoading.hide();
					var alertPopup = $ionicPopup.alert({
						 title: 'There is some problem',
						 template: 'There is some problem to save the product..',
						 type: 'button-default',
					  });

					  alertPopup.then(function(res) {
						$state.transitionTo('app.dashboard');
					  });
			}
			
		});


	}	
	
	
	
	
})
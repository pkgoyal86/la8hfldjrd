angular.module('starter.controllers').controller('productAddCtrl', function($scope, $stateParams,$ionicPlatform,$http,$cordovaContacts,$cordovaSocialSharing,$state,$ionicPopup,$ionicLoading) {
	
	var id	=	$stateParams.id;
	$scope.user={};
	$scope.user.unique_id =$stateParams.id;
	
	
	
		
	$scope.submitData = function()
	{
		$ionicLoading.show();
		$scope.ApiRespnsMsgShow = false;
		
		
		
		var params = JSON.stringify($scope.user);
		$http.get(SiteUrl+"/product_add?data="+params)
		.then(function(req_response){
			
			console.log(req_response.data.message);
			if(req_response.data.message == "success"){
				
				$ionicLoading.hide();
				var alertPopup = $ionicPopup.alert({
					 title: 'Success',
						 template: 'Product is added successfully.',
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
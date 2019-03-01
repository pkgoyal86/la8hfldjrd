angular.module('starter.controllers').controller('productSearchCtrl', function($scope, $stateParams,$ionicPlatform,$http,$cordovaContacts,$cordovaSocialSharing,$state,$ionicPopup,$ionicLoading) {
	
	
	
	
	$scope.searchProduct = function()
	{
		$ionicLoading.show();
		var searchUserName	=	document.getElementById('user_keyword').value;
		var url	=	SiteUrl+"/product_search/"+searchUserName;
		$http({
        method : "GET",
        url : url,
		}).then(function mySuccess(response) {
			$ionicLoading.hide();
			if(response.data){
				$scope.data	=	response.data;
			}
			
		}, function myError(response) {
			$ionicLoading.hide();
			myJSON = JSON.stringify(response); 
			console.log(myJSON);
		});
	}
	
})
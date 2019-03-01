angular.module('starter.controllers').controller('productDetailCtrl', function($scope, $stateParams,$ionicPlatform,$http,$cordovaContacts,$cordovaSocialSharing,$state,$ionicPopup) {
	
	var id	=	$stateParams.id;
	
	
	
	var url	=	SiteUrl+"/product_detail/"+id;
		$http({
        method : "GET",
        url : url,
		}).then(function mySuccess(response) {
			if(response.data){
				$scope.data	=	response.data;
			}else{
				$scope.data	=	'';
			}
			
		}, function myError(response) {
			myJSON = JSON.stringify(response); 
			console.log(myJSON);
		});
		
		
		
	
	
	
	
})
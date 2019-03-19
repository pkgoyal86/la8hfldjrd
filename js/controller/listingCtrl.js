angular.module('starter.controllers').controller('listingCtrl', function($rootScope,$scope,$http,$ionicLoading,$state,$ionicPopup,$stateParams) {

	
	
	
	$scope.getAllQuotes = function(){
		$http.get(SiteUrl+"/get_all_quotes/")
		.then(function(req_response){    
		if(req_response.data)
		{
			
			
			$scope.data	=	req_response.data;
			
		}
		},
		function(data) {
			//$scope.NoResponseInnerPage();
		});
	}
	
	$scope.searchProduct = function()
	{
		$ionicLoading.show();
		var searchUserName	=	document.getElementById('user_keyword').value;
		var url	=	SiteUrl+"/search/"+searchUserName;
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
	
	
	$scope.getAllQuotes(status);
	
})
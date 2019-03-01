angular.module('starter.controllers').controller('QuoteStep2Ctrl', function($rootScope,$scope,$http,$ionicLoading,$state,$ionicPopup) {
	
	$scope.user={};
	$scope.user.email	=	'';
	$scope.user.phone_number	=	'';
	$scope.user.reference	=	'';
	$scope.user.postcode	=	'';
	
	var current_quote_number	=	localStorage.getItem("current_quote_number");
	
	$scope.getQuoteDetial = function () {
		$http({
			method : "GET",
			url : SiteUrl+"/get_quote_detail/"+current_quote_number,

		}).then(function mySucces(response) {
			$scope.user	=	 response.data.Quote;
			
		}, function myError(response) {

		});
	}
	
	$scope.getQuoteDetial();
	
	if(localStorage.getItem("current_quote_number"))
	{
		//$state.go('app.dashboard');
	}else{
		$state.go('app.quote_step_1');
	}
	$scope.submitData = function()
	{
		$ionicLoading.show();
		$scope.user.current_quote_number	=	localStorage.getItem("current_quote_number");
		var params = JSON.stringify($scope.user);
		$http.get(SiteUrl+"/quote_step_2?data="+params)
		.then(function(req_response){
			
			$ionicLoading.hide();
			if(req_response.data.message == "success"){
				
				$state.go('app.quote_step_3');

			}else if(req_response.data.message == "failed"){
					var alertPopup = $ionicPopup.alert({
						 title: 'Error',
						 template: 'This is some error.',
						 type: 'button-default',
					  });

					  alertPopup.then(function(res) {
						//$state.transitionTo('app.verify_phone', {'id': req_response.data.user_id});
					  });
			}
			
		});
		
	}
	
	
	
	
})
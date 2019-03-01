angular.module('starter.controllers').controller('QuoteStep8Ctrl', function($rootScope,$scope,$http,$ionicLoading,$state,$ionicPopup) {
	
	
	
	$scope.user	=	{};
	
	var current_quote_number	=	localStorage.getItem("current_quote_number");
	if(localStorage.getItem("current_quote_number"))
	{
		//$state.go('app.dashboard');
	}else{
		$state.go('app.quote_step_1');
	}
	
	
	
	
	$scope.getQuoteDetial = function () {
		$http({
			method : "GET",
			url : SiteUrl+"/get_quote_detail/"+current_quote_number,

		}).then(function mySucces(response) {
			$scope.current_quote_data	=	 response.data;
			console.log($scope.current_quote_data.Total_price);
		}, function myError(response) {

		});
	}
	
	$scope.getQuoteDetial();
	
	$scope.user.discount	=	0;
	$scope.user.notes	=	'';
				
	$scope.submitData = function()
	{
		
		$scope.user.current_quote_number	=	localStorage.getItem("current_quote_number");
		var params = JSON.stringify($scope.user);
		$http.get(SiteUrl+"/quote_step_8?data="+params)
			.then(function(req_response){
				
				$ionicLoading.hide();
				if(req_response.data.message == "success"){
					localStorage.setItem("current_quote_number","");
					$state.go('app.thanks');

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
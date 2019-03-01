angular.module('starter.controllers').controller('QuoteStep6Ctrl', function($rootScope,$scope,$http,$ionicLoading,$state,$ionicPopup) {
	
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
			$scope.user	=	 response.data.Quote;
			$scope.user.recommended_services	=	 JSON.parse(response.data.Quote.recommend_service_json);
			$scope.current_quote_data	=	 response.data;
		}, function myError(response) {

		});
	}
	
	
	
	$scope.getLawnconditions = function () {
		$http({
			method : "GET",
			url : SiteUrl+"/get_data_from_server",

		}).then(function mySucces(response) {
			$scope.data	=	 response.data.Service;
			$scope.getQuoteDetial();
		}, function myError(response) {

		});
	}
	$scope.getLawnconditions();
	$scope.user	=	{};
	$scope.user1	=	{};
	$scope.print = function() {
		console.log(JSON.stringify($scope.user1));
	}
	$scope.submitData = function()
	{
		
		/* var array = [];
		for(i in $scope.user1.recommended_services) {
			console.log($scope.user1.recommended_services[i]);
			if($scope.user1.recommended_services[i] == true) {
				array.push(i);
			}
		}
		console.log(JSON.stringify($scope.user1));
		return false;
		console.log(array);
		$scope.user.recommended_services	=	array; */
		$scope.user.current_quote_number	=	localStorage.getItem("current_quote_number");
		var params = JSON.stringify($scope.user);
		$http.get(SiteUrl+"/quote_step_6?data="+params)
			.then(function(req_response){
				
				$ionicLoading.hide();
				if(req_response.data.message == "success"){
					
					$state.go('app.quote_step_7');

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
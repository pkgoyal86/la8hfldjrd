angular.module('starter.controllers').controller('QuoteStep4Ctrl', function($rootScope,$scope,$http,$ionicLoading,$state,$ionicPopup) {
	$scope.user1	=	{};
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
			$scope.user	=	 response.data.Quote;
			$scope.user.lawn_conditions	=	 JSON.parse(response.data.Quote.lawn_condition_json);
			
		}, function myError(response) {

		});
	}
	
	$scope.getQuoteDetial();
	
	$scope.getLawnconditions = function () {
		$http({
			method : "GET",
			url : SiteUrl+"/get_data_from_server",

		}).then(function mySucces(response) {
			$scope.data	=	 response.data.LawnCondition;
		}, function myError(response) {

		});
	}
	$scope.getLawnconditions();
	$scope.print = function() {
		console.log(JSON.stringify($scope.user1));
	}
	$scope.submitData = function()
	{
		/* var array = [];
		for(i in $scope.user1.lawn_conditions) {
			console.log($scope.user1.lawn_conditions[i]);
			if($scope.user1.lawn_conditions[i] == true) {
				array.push(i);
			}
		}
		console.log(array); */
		//$scope.user.lawn_conditions	=	array;
		$scope.user.current_quote_number	=	localStorage.getItem("current_quote_number");
		var params = JSON.stringify($scope.user);
		console.log(params);
		//return false;
		$http.get(SiteUrl+"/quote_step_4?data="+params)
			.then(function(req_response){
				
				$ionicLoading.hide();
				if(req_response.data.message == "success"){
					$state.go('app.upload_image');

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
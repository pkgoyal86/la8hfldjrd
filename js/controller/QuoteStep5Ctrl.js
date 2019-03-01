angular.module('starter.controllers').controller('QuoteStep5Ctrl', function($rootScope,$scope,$http,$ionicLoading,$state,$ionicPopup) {
	
	var current_quote_number	=	localStorage.getItem("current_quote_number");
	if(localStorage.getItem("current_quote_number"))
	{
		//$state.go('app.dashboard');
	}else{
		$state.go('app.quote_step_1');
	}
	
	$scope.getLawnconditions = function () {
		$http({
			method : "GET",
			url : SiteUrl+"/get_data_from_server",

		}).then(function mySucces(response) {
			$scope.data	=	 response.data.Plan;
			$scope.getQuoteDetial();
		}, function myError(response) {

		});
	}
	$scope.getLawnconditions();
	
	$scope.getQuoteDetial = function () {
		$http({
			method : "GET",
			url : SiteUrl+"/get_quote_detail/"+current_quote_number,

		}).then(function mySucces(response) {
			$scope.current_quote_data	=	 response.data;
			console.log($scope.current_quote_data.Quote.total_area);
		}, function myError(response) {

		});
	}
	
		
	
	
	$scope.choosePlan = function(id)
	{
		console.log(id);
		$http({
			method : "GET",
			url : SiteUrl+"/choose_plan/"+current_quote_number+"/"+id,

		}).then(function mySucces(response) {
			//$state.go('app.submit_plan',{'plan_id',id});
			
			$state.transitionTo('app.submit_plan', {'plan_id':id}, {
				reload: true,
				inherit: false,
				notify: true
			});
		}, function myError(response) {

		});

	}
	
	$scope.submitData = function()
	{
		$state.go('app.quote_step_7');


	}
})
angular.module('starter.controllers').controller('confirmAreaCtrl', function($rootScope,$scope,$http,$ionicLoading,$state,$ionicPopup,$stateParams,$ionicModal) {

	
	var current_quote_number	=	localStorage.getItem("current_quote_number");
	if(localStorage.getItem("current_quote_number"))
	{
		//$state.go('app.dashboard');
	}else{
		$state.go('app.quote_step_1');
	}
	
	$scope.user	=	{};
	$scope.user.rough_eta = '';
	
	$scope.getJobs = function()
	{
		$http.get(SiteUrl+"/get_quote_detail/"+current_quote_number)
		.then(function(req_response){    
		if(req_response.data)
		{
			
			
			$scope.data	=	req_response.data;
			$scope.Area	=	 JSON.parse(req_response.data.Quote.area_json);
			console.log($scope.data);
		}
		},
		function(data) {
			//$scope.NoResponseInnerPage();
		});
	}
	
	$scope.getJobs(current_quote_number);
	
	
	
	$scope.back1 = function()
	{
	 $state.transitionTo('app.quote_step_3', '', {
				reload: true,
				inherit: false,
				notify: true
			}); 
	}
	
	$scope.continue1 = function()
	{
	 $state.transitionTo('app.quote_step_4', '', {
				reload: true,
				inherit: false,
				notify: true
			}); 
	}
	
	
	
	
})
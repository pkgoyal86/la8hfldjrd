angular.module('starter.controllers').controller('submitPlanCtrl', function($rootScope,$scope,$http,$ionicLoading,$state,$ionicPopup,$stateParams) {
	
	var current_quote_number	=	localStorage.getItem("current_quote_number");
	if(localStorage.getItem("current_quote_number"))
	{
		//$state.go('app.dashboard');
	}else{
		$state.go('app.quote_step_1');
	}
	
	$scope.user	=	{};
	$scope.user.discount	=	0;
	$scope.user.notes	=	'';
	var plan_id			=	$stateParams.plan_id;
	$scope.plan_id	=	plan_id;
	$scope.getLawnconditions = function () {
		$http({
			method : "GET",
			url : SiteUrl+"/get_data_from_server",

		}).then(function mySucces(response) {
			$scope.data	=	 response.data.Plan;
			$scope.data1	=	 response.data.Page.description;
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
			$scope.canvas = document.getElementById('signatureCanvas');
			$scope.signaturePad = new SignaturePad($scope.canvas);
		}, function myError(response) {

		});
	}
	
		
	
	
	
	
	$scope.submitData = function()
	{
		$ionicLoading.show();
		$scope.user.current_quote_number	=	localStorage.getItem("current_quote_number");
		$scope.user.purchase_type			=	2;
		
		var sigImg = $scope.signaturePad.toDataURL();
        $scope.user.signature = sigImg;
		
		var params = JSON.stringify($scope.user);
		jQuery.ajax({
			   type: "POST",
			   url: SiteUrl+"/quote_step_8",
			   data: 'data='+params, 
			   success: function(data)
			   {
				  $ionicLoading.hide();
				  localStorage.setItem("current_quote_number","");
					$state.go('app.thanks');
			   }
			 });
		/* $http.get(SiteUrl+"/quote_step_8?data="+params)
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
				
			}); */
	}
	
	

    $scope.clearCanvas = function() {
        signaturePad.clear();
    }
	
	
})
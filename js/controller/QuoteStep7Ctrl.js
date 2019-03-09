angular.module('starter.controllers').controller('QuoteStep7Ctrl', function($rootScope,$scope,$http,$ionicLoading,$state,$ionicPopup) {
	
	
	$scope.user	=	{};
	$scope.user1	=	{};
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
			$scope.user.choosed_services	=	 JSON.parse(response.data.Quote.choosed_services_json);
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
			$scope.data1	=	 response.data.Page.description;
			console.log($scope.data1);
			$scope.getQuoteDetial();
		}, function myError(response) {

		});
	}	
	$scope.getLawnconditions();
	$scope.print = function() {
		console.log(JSON.stringify($scope.user1));
	}
	$scope.submitData = function()
	{
		$ionicLoading.show();
		/* var array = [];
		for(i in $scope.user1.choosed_services) {
			console.log($scope.user1.choosed_services[i]);
			if($scope.user1.choosed_services[i] == true) {
				array.push(i);
			}
		}
		console.log(array);
		$scope.user.choosed_services	=	array; */
		$scope.user.current_quote_number	=	localStorage.getItem("current_quote_number");
		var sigImg = signaturePad.toDataURL();
        $scope.user.signature = sigImg;
		var params = JSON.stringify($scope.user);
		
		  console.log(params);
		  
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
			/* var xhttp = new XMLHttpRequest();
			  xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				 localStorage.setItem("current_quote_number","");
					$state.go('app.thanks');
				}
			  };
			  xhttp.open("POST", SiteUrl+"/quote_step_8?data="+params, true);
			  xhttp.send(); */
	}
	
	var canvas = document.getElementById('signatureCanvas');
    var signaturePad = new SignaturePad(canvas);

    $scope.clearCanvas = function() {
        signaturePad.clear();
    }

    
	
	
})
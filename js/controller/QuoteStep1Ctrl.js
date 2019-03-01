angular.module('starter.controllers').controller('QuoteStep1Ctrl', function($rootScope,$scope,$http,$ionicLoading,$state,$ionicPopup) {
	
	
	$scope.user={};
	/* var d = new Date();
	var n = d.getFullYear();
	var m1 = d.getMonth()+1;
	var m2 = d.getDate();
	
	m1	=	("0" + m1).slice(-2);
	m2	=	("0" + m2).slice(-2);
	
	var n = n.toString();
	var m1 = m1.toString();
	var m2 = m2.toString();

	$scope.user.quote_number	=	n+m1+m2; */
	
	
	var current_quote_number	=	localStorage.getItem("current_quote_number");
	
	
	var first_name	=	localStorage.getItem("LoginUserFirstName");
	var last_name	=	localStorage.getItem("LoginUserLastName");
	
	console.log(current_quote_number);
	if(current_quote_number == '' || current_quote_number == null){
	
		$http.get(SiteUrl+"/get_new_quote_no")
		.then(function(req_response){
			if(req_response.data.message == "success"){
				var id	=	req_response.data.id;
				$scope.user.id	=	id;
				localStorage.setItem("current_quote_number", id);
			}
			
			
		});
		
		
	}else{
		$scope.user.id	=	current_quote_number;
	}
	
	
	$scope.submitData = function()
	{
		$ionicLoading.show();
		$scope.user.login_user_id			=	localStorage.getItem("LoginUserID");
		$scope.user.current_quote_number	=	current_quote_number;
		var params = JSON.stringify($scope.user);
		$http.get(SiteUrl+"/quote_step_1?data="+params)
		.then(function(req_response){
			$ionicLoading.hide();
			if(req_response.data.message == "success"){
				localStorage.setItem("current_quote_number", req_response.data.current_quote_number);
				$state.go('app.quote_step_2');

			}else if(req_response.data.message == "failed"){
					var alertPopup = $ionicPopup.alert({
						 title: 'Quote number exist',
						 template: 'This Quote number already exist.',
						 type: 'button-default',
					  });

					  alertPopup.then(function(res) {
						//$state.transitionTo('app.verify_phone', {'id': req_response.data.user_id});
					  });
			}
			
		});
		
		
		/* localStorage.setItem("quote_data_step_1",JSON.stringify($scope.user));
		$state.go('app.quote_step_2'); */


	}
	
	
})
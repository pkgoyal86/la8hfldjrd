angular.module('starter.controllers').controller('QuoteStep3Ctrl', function($rootScope,$scope,$http,$ionicLoading,$state,$ionicPopup) {
	
	
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
			if(response.data.Quote.area_json != '' && response.data.Quote.area_json != null){
				$scope.user	=	 JSON.parse(response.data.Quote.area_json);
				$scope.user.total_area	=	 response.data.Quote.total_area;
			}
		}, function myError(response) {

		});
	}
	
	$scope.getQuoteDetial();

	
	$scope.user	=	{};
	$scope.user1	=	{};
	$( document ).ready(function() {
		/* $("td").click(function(){
		  $("td").toggleClass("selected");
		}); */
	/*$(".calculate_area_checkbox").change(function() {
		 console.log('1');
						$scope.calculateTotalArea();
								
					}); */
	//	$('.calculate_area_checkbox input:checkbox').prop('checked', false).click( $scope.calculateTotalArea(1) );			
	//	$('.calculate_area_checkbox input:checkbox').prop('checked', true).click( $scope.calculateTotalArea(1) );			
	});
	
	

	$scope.autocheck = function(n)
	{
		//$('#area_'+n+'_calculate').html('<i class="fa fa-check" aria-hidden="true"></i>').trigger("change");
		//$('#area_'+n+'_calculate').click();
		//$('.td_'+n).addClass('selected');
		/* $('#area_'+n+'_calculate').prop('checked', true).trigger("change");
		$('#area_'+n+'_calculate').click(); */
		
	}
	
	$scope.tickuntck = function(n)
	{
		/* console.log('eee');
		if($('#area_'+n+'_calculate').is(':checked')){
			$('#area_'+n+'_calculate').html('');
		}else{
			$('#area_'+n+'_calculate').html('<i class="fa fa-check" aria-hidden="true"></i>');
		} */
		$scope.calculateTotalArea();
	}
	
	$scope.calculateTotalArea = function()
	{	
		//$('#area_'+n+'_calculate').prop('checked', true);
		console.log('1');
		var lenght_1	=	0;
		var width_1		=	0;
		var lenght_2	=	0;
		var width_2		=	0;
		var lenght_3	=	0;
		var width_3		=	0;
		var lenght_4	=	0;
		var width_4		=	0;
		var lenght_5	=	0;
		var width_5		=	0;
		var lenght_6	=	0;
		var width_6		=	0;
		var lenght_7	=	0;
		var width_7		=	0;
		var lenght_8	=	0;
		var width_8		=	0;
		var lenght_9	=	0;
		var width_9		=	0;
		var lenght_10	=	0;
		var width_10	=	0;
		
		var lenght_1	=	document.getElementById('lenght_1').value;
		var width_1		=	document.getElementById('width_1').value;
		var lenght_2	=	document.getElementById('lenght_2').value;
		var width_2		=	document.getElementById('width_2').value;
		var lenght_3	=	document.getElementById('lenght_3').value;
		var width_3		=	document.getElementById('width_3').value;
		var lenght_4	=	document.getElementById('lenght_4').value;
		var width_4		=	document.getElementById('width_4').value;
		var lenght_5	=	document.getElementById('lenght_5').value;
		var width_5		=	document.getElementById('width_5').value;
		var lenght_6	=	document.getElementById('lenght_6').value;
		var width_6		=	document.getElementById('width_6').value;
		var lenght_7	=	document.getElementById('lenght_7').value;
		var width_7		=	document.getElementById('width_7').value;
		var lenght_8	=	document.getElementById('lenght_8').value;
		var width_8		=	document.getElementById('width_8').value;
		var lenght_9	=	document.getElementById('lenght_9').value;
		var width_9		=	document.getElementById('width_9').value;
		var lenght_10	=	document.getElementById('lenght_10').value;
		var width_10	=	document.getElementById('width_10').value;
		
		var total_area	=	0;
		
		/* if($('#area_1_calculate').is(':checked')){
			var area_1	=	lenght_1 * width_1;
		}else{
			var area_1	=	0;
		} */
		
		if($('#area_1_calculate').is(':checked')){
			var area_1	=	lenght_1 * width_1;
		}else{
			var area_1	=	0;
		}
		
		if($('#area_2_calculate').is(':checked')){
			var area_2	=	lenght_2 * width_2;
		}else{
			var area_2	=	0;
		}
		
		if($('#area_3_calculate').is(':checked')){
			var area_3	=	lenght_3 * width_3;
		}else{
			var area_3	=	0;
		}
		
		if($('#area_4_calculate').is(':checked')){
			var area_4	=	lenght_4 * width_4;
		}else{
			var area_4	=	0;
		}
		
		if($('#area_5_calculate').is(':checked')){
			var area_5	=	lenght_5 * width_5;
		}else{
			var area_5	=	0;
		}
		
		if($('#area_6_calculate').is(':checked')){
			var area_6	=	lenght_6 * width_6;
		}else{
			var area_6	=	0;
		}
		
		if($('#area_7_calculate').is(':checked')){
			var area_7	=	lenght_7 * width_7;
		}else{
			var area_7	=	0;
		}
		
		if($('#area_8_calculate').is(':checked')){
			var area_8	=	lenght_8 * width_8;
		}else{
			var area_8	=	0;
		}
		
		if($('#area_9_calculate').is(':checked')){
			var area_9	=	lenght_9 * width_9;
		}else{
			var area_9	=	0;
		}
		
		if($('#area_10_calculate').is(':checked')){
			var area_10	=	lenght_10 * width_10;
		}else{
			var area_10	=	0;
		}

		var total_area	=	area_1 +  area_2 +  area_3 +  area_4 +  area_5 +  area_6 +  area_7 +  area_8 +  area_9 +  area_10;		
						
		//document.getElementById('toal_area').innerHTML = (lenght_1 * width_1) + (lenght_2 * width_2) + (lenght_3 * width_3) + (lenght_4 * width_4) + (lenght_5 * width_5) + (lenght_6 * width_6) + (lenght_7 * width_7) + (lenght_8 * width_8) + (lenght_9 * width_9) + (lenght_10 * width_10) ;
		
		document.getElementById('toal_area').innerHTML =	total_area;
		
		
		
	}
	
	
	$scope.submitData = function()
	{
		
		
		$scope.user.total_area	=	document.getElementById('toal_area').innerHTML;
		if($scope.user.total_area == 0){
			alert('Please add lawn info and checkbox to select.');
		}else{
			//$ionicLoading.show();
			
			$scope.user.current_quote_number	=	localStorage.getItem("current_quote_number");
			var params = JSON.stringify($scope.user);
			console.log(params);
			//return false;
			$http.get(SiteUrl+"/quote_step_3?data="+params)
			.then(function(req_response){
				
				$ionicLoading.hide();
				if(req_response.data.message == "success"){	
					//return false;
					$state.go('app.confirm_area');

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
			/* localStorage.setItem("quote_data_step_3",JSON.stringify($scope.user));
			$state.go('app.quote_step_4'); */
		}
		


	}
	
})
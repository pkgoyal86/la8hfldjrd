angular.module('starter.controllers').controller('signpageCtrl', function($rootScope,$scope,$http,$ionicLoading,$state,$ionicPopup,$stateParams,$cordovaCamera, $cordovaFile, $cordovaFileTransfer, $cordovaDevice,$cordovaActionSheet,$ionicSideMenuDelegate) {
	
	var current_quote_number	=	localStorage.getItem("current_quote_number");
	if(localStorage.getItem("current_quote_number"))
	{
		//$state.go('app.dashboard');
	}else{
		$state.go('app.quote_step_1');
	}
	
	$scope.user	=	{};
	$scope.signaturePad	=	{};
	$ionicSideMenuDelegate.canDragContent(false);
		
	
	var canvas = document.getElementById('signatureCanvas');
    var signaturePad = new SignaturePad(canvas);

    $scope.clearCanvas = function() {
        signaturePad.clear();
    }

    $scope.submitData = function()
	{
		$ionicLoading.show();
		$scope.user.current_quote_number	=	localStorage.getItem("current_quote_number");
		
		var sigImg = signaturePad.toDataURL();
        $scope.user.signature = sigImg;
		
		var params = JSON.stringify($scope.user);
		jQuery.ajax({
			   type: "POST",
			   url: SiteUrl+"/update_sign",
			   data: 'data='+params, 
			   success: function(data)
			   {
				  $ionicLoading.hide();
				  localStorage.setItem("current_quote_number","");
					$state.go('app.thanks');
			   }
			 });
		
	}
	
	
})
angular.module('starter.controllers').controller('ticketDetailCtrl', function($rootScope,$scope,$http,$ionicLoading,$state,$ionicPopup,$stateParams,$ionicModal) {

	
	
	$scope.user	=	{};
	$scope.user.rough_eta = '';
	var id	=	$stateParams.id;
	console.log(id);
	var status = 2;
	var LoginUserID	=	localStorage.getItem("LoginUserID");
	
	$scope.LoginUserID	=	LoginUserID;
	
	$scope.getJobs = function()
	{
		$http.get(SiteUrl+"/get_quote_detail/"+id)
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
	
	$scope.getJobs(id);
	
	/* $scope.acceptTask = function(){
		$state.transitionTo('app.ticket_continue', {'id': id}, {
			reload: true,
			inherit: false,
			notify: true
		});
		
	}
	
	$scope.rejectTask = function(){
		$state.transitionTo('app.ticket_continue', {'id': id}, {
			reload: true,
			inherit: false,
			notify: true
		});
		
	}
	
	$scope.notSureIfTodayTask = function(){
		$state.transitionTo('app.ticket_continue', {'id': id}, {
			reload: true,
			inherit: false,
			notify: true
		});
		
	} */
	
	$scope.continue1 = function()
	{
	 $state.transitionTo('app.ticket_complete', {'id': id}, {
				reload: true,
				inherit: false,
				notify: true
			}); 
	}
	
	
	
	
	
	$ionicModal.fromTemplateUrl('templates/image-modal.html', {
	  scope: $scope,
	  animation: 'slide-in-up',
	  backdropClickToClose: false,
	  hardwareBackButtonClose: false,
	  focusFirstInput: true
	}).then(function(modal) {
	  $scope.modal = modal;
	  console.log($scope.modal);
	});

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };
	
	$scope.showImage = function(index) {
		$scope.imageSrc = index;
		$scope.openModal();
    }	
})
angular.module('starter.controllers').controller('ticketDetailCtrl', function($rootScope,$scope,$http,$ionicLoading,$state,$ionicPopup,$ionicPush,$stateParams,$ionicModal) {

	if(localStorage.getItem("LoginUserID"))
	{
		
	}else{
		$state.go('app.email_login');
	}

	
	var device_type	=	ionic.Platform.platform();
	if(device_type == 'android' || device_type == 'ios'){
	FCMPlugin.getToken(function(token){
		localStorage.setItem("android_device_id",token)
	});
	}
	
	$scope.user	=	{};
	$scope.user.rough_eta = '';
	var id	=	$stateParams.id;
	
	var status = 2;
	var LoginUserID	=	localStorage.getItem("LoginUserID");
	
	$scope.LoginUserID	=	LoginUserID;
	
	$scope.getJobs = function()
	{
		$http.get(SiteUrl+"/job_detail/"+id)
		.then(function(req_response){    
		if(req_response.data)
		{
			
			
			$scope.data	=	req_response.data;
			console.log($scope.data);
		}
		},
		function(data) {
			//$scope.NoResponseInnerPage();
		});
	}
	
	$scope.getJobs();
	
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
	
	$scope.startWork = function()
	{
	 $state.transitionTo('app.ticket_continue', {'id': id}, {
				reload: true,
				inherit: false,
				notify: true
			}); 
	}
	
	$scope.editTicket = function()
	{
	 $state.transitionTo('app.edit_ticket', {'id': id}, {
				reload: true,
				inherit: false,
				notify: true
			}); 
	}
	
	$scope.addNotes = function()
	{
	 $state.transitionTo('app.add_notes_step_1', {'id': id}, {
				reload: true,
				inherit: false,
				notify: true
			}); 
	}
	
	$scope.acceptTask = function(status)
	{
		
		
		if(status == 'accepted'){
			
				 $http.get(SiteUrl+"/change_status/"+id+"/"+status)
				.then(function(req_response){    
				if(req_response)
				{
					
					var alertPopup = $ionicPopup.alert({
						 title: 'Status is successfully updated.',
						 template: '',
						   cssClass: 'myPopup2',
						 type: 'button-default',
					  });
						 alertPopup.then(function(res) {
							$state.go('app.dashboard');
						  });
				
					
					
				}
				},
				function(data) {
					//$scope.NoResponseInnerPage();
				}); 
			
			
			
			/* $state.transitionTo('app.ticket_continue', {'id': id}, {
					reload: true,
					inherit: false,
					notify: true
				}); */
				
		}else if(status == 'rejected'){
			$state.transitionTo('app.ticket_reject', {'id': id}, {
					reload: true,
					inherit: false,
					notify: true
				});
			
		}else if(status == 'not_sure_if_today'){
			$state.transitionTo('app.ticket_not_sure', {'id': id}, {
					reload: true,
					inherit: false,
					notify: true
				});
			/* $http.get(SiteUrl+"/change_status/"+id+"/"+status)
			.then(function(req_response){    
			if(req_response)
			{
				var alertPopup = $ionicPopup.alert({
				 title: 'Status is successfully updated.',
				 template: '',
				   cssClass: 'myPopup2',
				 type: 'button-default',
			  });
				
				$state.transitionTo('app.dashboard', {
					reload: true,
					inherit: false,
					notify: true
				});
				
			}
			},
			function(data) {
				//$scope.NoResponseInnerPage();
			}); */
		}
		 
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
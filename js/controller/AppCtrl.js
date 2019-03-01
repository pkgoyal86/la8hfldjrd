angular.module('starter.controllers').controller('AppCtrl', function($scope, $ionicModal, $timeout,$rootScope,$state,$http,$ionicHistory,$ionicLoading,$window,$ionicPopup,$ionicPlatform) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


	$scope.$on('$ionicView.beforeEnter', function (e, data) {

		if(localStorage.getItem("UserToken") && localStorage.getItem("LoginUserID")){
			$scope.$root.left_menu_after_login = true;
			$scope.$root.left_menu_without_login = false;
			//console.log(localStorage.getItem("LoginUserImage"));
			$scope.image = localStorage.getItem("LoginUserImage");
			$scope.first_name = localStorage.getItem("LoginUserFirstName");
			$scope.last_name = localStorage.getItem("LoginUserLastName");
			$scope.user_id = localStorage.getItem("LoginUserID");
			$scope.role_id = localStorage.getItem("LoginUserRole");
			console.log('aa'+$scope.role_id);


		} else {
			$scope.$root.left_menu_after_login = false;
			$scope.$root.left_menu_without_login = true;
		}
		$scope.currState = $state;
		var currentState = $state.current.name;





		if(currentState == 'app.me'){
			$rootScope.backbuttonshow = false;
		}else if(currentState == 'app.subject'){
			$scope.lastView = $ionicHistory.backView() ;
			if($scope.lastView.stateName == 'app.newsfeed' || $scope.lastView.stateName == 'app.notification' || $scope.lastView.stateName == 'app.my_subjects'){
				$rootScope.backbuttonshow = true;
			}else{
				$rootScope.backbuttonshow = false;
			}
		}else if(currentState == 'app.edit_subject'){
			$rootScope.backbuttonshow = true;
		}else if(currentState == 'app.edit_profile'){
			$rootScope.backbuttonshow = true;
		}else if(currentState == 'app.update_phone_number'){
			$rootScope.backbuttonshow = true;
		}else if(currentState == 'app.phone_login'){
			$rootScope.backbuttonshow = false;
		}else if(currentState == 'app.quote_step_1'){
			$rootScope.backbuttonshow = false;
		}else if(currentState == 'app.quote_step_2'){
			$rootScope.backbuttonshow = true;
		}else if(currentState == 'app.quote_step_3'){
			$rootScope.backbuttonshow = true;
		}else if(currentState == 'app.quote_step_4'){
			$rootScope.backbuttonshow = true;
		}else if(currentState == 'app.quote_step_5'){
			$rootScope.backbuttonshow = true;
		}else if(currentState == 'app.quote_step_6'){
			$rootScope.backbuttonshow = true;
		}else if(currentState == 'app.quote_step_7'){
			$rootScope.backbuttonshow = true;
		}else if(currentState == 'app.quote_step_8'){
			$rootScope.backbuttonshow = true;
		}else if(currentState == 'app.upload_image'){
			$rootScope.backbuttonshow = true;
		}




		if($rootScope.backbuttonshow == true){
			$rootScope.on_trial_page = true;
			$rootScope.searchicon = true;
		}
		if(currentState == 'app.post'){
			$scope.currentTab = 'rate';
		}else if(currentState == 'app.newsfeed'){
			$scope.currentTab = 'newsfeed';
		}

		if(currentState == 'app.dashboard'){
			$scope.show_menu_button = true;
		}else{
			$scope.show_menu_button = false;
		}

	});

	$scope.onClickTab= function(x){
      $scope.currentTab = x;
	  console.log($scope.currentTab);
    };

	$scope.logout = function()
	{
		$ionicLoading.show();

		$window.localStorage.clear();
		$ionicHistory.clearCache();
		$ionicHistory.clearHistory();
		$ionicLoading.hide();
		$ionicHistory.clearCache().then(function(){
			$state.go('app.login', '',{'refresh':true});
		});


	}

	$scope.syncData = function () {
		$ionicLoading.show();
		$http({
			method : "GET",
			url : SiteUrl+"/check_server_response",

		}).then(function mySucces(response) {
			$scope.getLawnconditions();
		}, function myError(response) {
			$ionicLoading.hide();
			$ionicPopup.alert({
			  title: 'No Internet',
			  content: 'Still No Internet.'
			})
			.then(function(result) {


			});
		});
	}

	/* $scope.getLawnconditions = function () {
		$http({
			method : "GET",
			url : SiteUrl+"/get_data_from_server",

		}).then(function mySucces(response) {
			console.log(response);
			$ionicLoading.hide();
			localStorage.setItem("get_data_from_server",JSON.stringify(response.data));

			$state.go('app.quote_step_1');
		}, function myError(response) {

		});
	} */
	
	$scope.sendFormDataToServer = function () {
		var quote_data_step_1	=	localStorage.getItem("quote_data_step_1");
		var quote_data_step_2	=	localStorage.getItem("quote_data_step_2");
		var quote_data_step_3	=	localStorage.getItem("quote_data_step_3");
		var quote_data_step_4	=	localStorage.getItem("quote_data_step_4");
		var quote_data_step_6	=	localStorage.getItem("quote_data_step_6");
		var quote_data_step_7	=	localStorage.getItem("quote_data_step_7");
		var quote_data_step_8	=	localStorage.getItem("quote_data_step_8");
		$http({
			method : "GET",
			url : SiteUrl+"/send_data_to_server/quote_data_step_1:"+quote_data_step_1+"/quote_data_step_2:"+quote_data_step_2+"/quote_data_step_3:"+quote_data_step_3+"/quote_data_step_4:"+quote_data_step_4+"/quote_data_step_6:"+quote_data_step_6+"/quote_data_step_7:"+quote_data_step_7+"/quote_data_step_8:"+quote_data_step_8,

		}).then(function mySucces(response) {
			
		}, function myError(response) {

		});
	}

	$scope.tryInternet = function () {
		$ionicLoading.show();
		$http({
			method : "GET",
			url : SiteUrl+"/rest/check_server_response",

		}).then(function mySucces(response) {
			$state.go('app.home', '',{'refresh':true});
		}, function myError(response) {
			$ionicLoading.hide();
			$ionicPopup.alert({
			  title: 'No Internet',
			  content: 'Still No interent.'
			})
			.then(function(result) {


			});
		});
	}
	$scope.NoResponse = function () {
		$ionicPopup.alert({
          title: 'No Internet Connection',
          content: 'Sorry, no Internet connectivity detected. Please reconnect and try again.'
        })
        .then(function(result) {
          $state.go('app.nointernet', '');
			//console.log('exit');
            //ionic.Platform.exitApp();

        });
	}





	var myPopup ;
	var myInterval ;
	var myCount ;
	$scope.NoResponseInnerPage = function (type = 'refresh') {
		console.log(type);
		myInterval = setInterval(function(){
		 $scope.tryInternetinner(type);
		}, 10000)
		myCount = setInterval(function(){
		$scope.myCount();
		}, 1000)
		setInterval(myCount,1000);
		 myPopup = $ionicPopup.show({
         title: 'No Internet Connection',
         subTitle: "Sorry, no Internet connectivity detected. ",
		 template: "Trying to reconnect...<span id='myddd'>10</span>",
		 cssClass:'nointernetpopup',
         scope: $scope,


      });



	}
	var count = 9;
	$scope.myCount = function () {

		if (count == 0) {
			count = 9;
		}
	  document.getElementById("myddd").textContent=count;
	  count --;
	}
	$scope.tryInternetinner = function (type) {

		  $http({
			method : "GET",
			url : SiteUrl+"/check-server-response",

		}).then(function mySucces(response) {
			console.log('checking...');
			clearInterval(myInterval);
			clearInterval(myCount);
			myPopup.close();
			if(type == 'refresh'){
				$state.reload();
			}
		}, function myError(response) {

		});
	}
	//var $scope.show_notification_counter = false;

	$scope.checkUserLogin = function () {
		if(!localStorage.getItem("LoginUserID")){
			$state.go('app.login');
		}
	}
	$scope.checkNotificationCounter = function () {

	}

	$scope.checkMeCounter = function () {

	}




	$scope.goToSearchUserPage = function()
	{
		$state.go('app.search_user', '',{'refresh':true});
	}




	$scope.goToPostPage = function (id,auto_redirect = 1) {
		var next_trial_counter_id	=	localStorage.getItem("next_trial_counter_id");
		if(next_trial_counter_id > 0){
			next_trial_counter_id = next_trial_counter_id - 1;
		}
		if(auto_redirect == 2){
			$state.transitionTo('app.post', {'trial_id':next_trial_counter_id,'search_trial_id': id,'auto_redirect': auto_redirect}, {
				reload: true,
				inherit: false,
				notify: true
			});
		}else{
			$state.transitionTo('app.post', {'trial_id':next_trial_counter_id,'search_trial_id': id}, {
				reload: true,
				inherit: false,
				notify: true
			});
		}

	}


	$scope.goToEditSubjectPage = function(id)
	{


		$state.transitionTo('app.edit_subject', {'id': id}, {
			reload: true,
			inherit: false,
			notify: true
		});


	}

	$scope.goToNextSubjectPage = function()
	{
		var next_trial_counter_id	=	localStorage.getItem("next_trial_counter_id");
		if(next_trial_counter_id > 0){
			next_trial_counter_id = next_trial_counter_id - 1;
		}
		$state.transitionTo('app.subject', {'trial_id': next_trial_counter_id}, {
			reload: true,
			inherit: false,
			notify: true
		});
	}

	$scope.callbackMethod = function (query, isInitializing) {
		if(isInitializing) {
        // depends on the configuration of the `items-method-value-key` (items) and the `item-value-key` (name) and `item-view-value-key` (name)
        return { items: [] }
		} else {
			var n = query.length;
			if(n > 0){
			return $http.get(SiteUrl+'/rest/autocomplete-from-app/term/'+query+"/location/"+country);
			}
		}

	}

	$scope.clickedMethod = function (callback) {
		if(callback.item.id == 0){
			$scope.goToCreateSubjectPage();
		}else{
			var next_trial_counter_id	=	localStorage.getItem("next_trial_counter_id");
			if(next_trial_counter_id > 0){
				next_trial_counter_id = next_trial_counter_id - 1;
			}
			$state.transitionTo('app.post', {'trial_id':next_trial_counter_id,'search_trial_id': callback.item.id}, {
				reload: true,
				inherit: false,
				notify: true
			});
		}

	}

	$scope.cancelButtonClickedMethod = function (callback) {
		$scope.IsVisible = $scope.IsVisible ? false : true;
	}








	$scope.cancelButtonClickedMethodCreateSubject = function (callback) {
		$scope.IsVisible = $scope.IsVisible ? false : true;
	}




	 $scope.IsVisible = false;
	$scope.ShowHide = function () {
		//If DIV is visible it will be hidden and vice versa.
		$scope.IsVisible = $scope.IsVisible ? false : true;
	}















	$scope.goBack = function() {
		console.log('aa');
		$ionicHistory.goBack();
	  };

	/* $ionicPush.register().then(function(t) {
		var myJSON = JSON.stringify(t);
		$http.get("http://yeswebstudio.com/webservices/insert_test?data="+myJSON)
		.then(function(req_response){
		if(req_response.data)
		{


		}
		});
	  return $ionicPush.saveToken(t);
	}).then(function(t) {
	  alert('Token saved:', t.token);
	}); */




});

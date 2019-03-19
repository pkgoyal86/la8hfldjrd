angular.module('starter.controllers').controller('uploadMoreImageCtrl', function($rootScope,$scope,$http,$ionicLoading,$state,$ionicPopup,$stateParams,$cordovaCamera, $cordovaFile, $cordovaFileTransfer, $cordovaDevice,$cordovaActionSheet) {
	
	
	
	var current_quote_number	=	$stateParams.id;
	
	$scope.user	=	{};
	
	
		
	
	$scope.getAllimagesofpost = function(current_quote_number)
	{
		$ionicLoading.show();
		$http.get(SiteUrl+"/get_all_images_of_quote/"+current_quote_number)
		.then(function(req_response){
				$ionicLoading.hide();
				$scope.imagedata	=	req_response.data;
				
			
			
		},
		function(data) {
			$scope.NoResponseInnerPage();
		});
	}
	$scope.getAllimagesofpost(current_quote_number);
	
	$scope.postImageDelete = function(id)
	{
		$ionicLoading.show();
		var params = JSON.stringify($scope.trial);
		$http.get(SiteUrl+"/delete_post_image/"+id)
		.then(function(req_response){
				$scope.getAllimagesofpost(current_quote_number);
			
			
		},
		function(data) {
			$scope.NoResponseInnerPage();
		});
		
	}
	
	$scope.submitData = function()
	{
		
		
		$state.transitionTo('app.ticket_detail', {'id': current_quote_number}, {
			reload: true,
			inherit: false,
			notify: true
		});
		


	}
	
	 $scope.loadTrialImage = function() {
	
	  var options = {
		title: 'Select Image Source',
		buttonLabels: ['Load from Library', 'Use Camera'],
		addCancelButtonWithLabel: 'Cancel',
		androidEnableCancelButton : true,
	  };
	  $cordovaActionSheet.show(options).then(function(btnIndex) {
		var type = null;
		if (btnIndex === 1) {
		  type = Camera.PictureSourceType.PHOTOLIBRARY;
		} else if (btnIndex === 2) {
		  type = Camera.PictureSourceType.CAMERA;
		}
		if (type !== null) {
		  $scope.selectTrialPicture(type);
		}
	  });
	}; 
	
	

	$scope.selectTrialPicture = function(sourceType) {
	  var options = {
		quality: 75,
		destinationType: Camera.DestinationType.FILE_URI,
		sourceType: sourceType,
		saveToPhotoAlbum: false,
		//targetWidth: 1200
	  };
	 
	  $cordovaCamera.getPicture(options).then(function(imagePath) {
		// Grab the file name of the photo in the temporary directory
		var currentName = imagePath.replace(/^.*[\\\/]/, '');
	 
		//Create a new name for the photo
		var d = new Date(),
		n = d.getTime(),
		newFileName =  n + ".jpg";
		
		
		// If you are trying to load image from the gallery on Android we need special treatment!
		if ($cordovaDevice.getPlatform() == 'Android' && sourceType === Camera.PictureSourceType.PHOTOLIBRARY) {
		  window.FilePath.resolveNativePath(imagePath, function(entry) {
			window.resolveLocalFileSystemURL(entry, success, fail);
			function fail(e) {
			  console.error('Error: ', e);
			}
	 
			function success(fileEntry) {
			  var namePath = fileEntry.nativeURL.substr(0, fileEntry.nativeURL.lastIndexOf('/') + 1);
			  // Only copy because of access rights
			  $cordovaFile.copyFile(namePath, fileEntry.name, cordova.file.dataDirectory, newFileName).then(function(success){
				$scope.image = newFileName;
				var current_quote_number	=	 localStorage.getItem("current_quote_number");
				$scope.uploadImage(current_quote_number);
						
					 

			  }, function(error){
				$scope.showAlert('Error', error.exception);
			  });
			};
		  }
		);
		} else {
		  var namePath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
		  // Move the file to permanent storage
		  $cordovaFile.moveFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function(success){
			$scope.image = newFileName;
			var current_quote_number	=	 localStorage.getItem("current_quote_number");
			$scope.uploadImage(current_quote_number);
		  }, function(error){
			$scope.showAlert('Error', error.exception);
		  });
		}
	  },
	  function(err){
		// Not always an error, maybe cancel was pressed...
	  })
	  
	 $scope.upload_button_dis	=	false;
	 
	};
	
	
	
	$scope.pathForImage = function(image) {
	  if (image === null) {
		return '';
	  } else {
		return cordova.file.dataDirectory + image;
	  }
	};
	
	
	
	
	
	 $scope.uploadImage = function(current_quote_number) {
		$ionicLoading.show();
	  // Destination URL
	  var url = SiteUrl+"/uploadPhoto/"+current_quote_number;
	 
	  // File for Upload
	  var targetPath = $scope.pathForImage($scope.image);
	 
	  // File name only
	  var filename = $scope.image;;
	 
	  var options = {
		fileKey: "userfile",
		fileName: filename,
		chunkedMode: false,
		mimeType: "multipart/form-data",
		params : {'fileName': filename}
	  };
	 
	  $cordovaFileTransfer.upload(url, targetPath, options).then(function(result) {
			$ionicLoading.hide();
			$scope.getAllimagesofpost(current_quote_number);
	  });
	} 
	
	
})
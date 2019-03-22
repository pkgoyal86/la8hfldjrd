// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova'])

.run(function($ionicPlatform,$state,$window,$rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
	
	
	
	
  });
  //handleOpenURL('pingapp://app/sadsadsad/46546');
  

  
})




.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i=1; i<total; i++) {
      input.push(i);
    }

    return input;
  };
})
 






.config(function($stateProvider, $urlRouterProvider) {
  
 

  
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

 
  
  
	
	
	
  	
	 
	.state('app.home', {
      url: '/home',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    }) 
	
	
	
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
		controller: 'loginCtrl'
      }
    }
  })
  
  .state('app.email_login', {
    url: '/email_login',
    views: {
      'menuContent': {
        templateUrl: 'templates/email_login.html',
		controller: 'emailLoginCtrl'
      }
    }
  })
  
  .state('app.login_step2', {
      url: '/login_step2/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/login_step2.html',
         // controller: 'verifyPhoneCtrl'
        }
      }
    })
	
  
	

	.state('app.nointernet', {
		url: '/nointernet',
		//cache: false,
		views: {
		  'menuContent': {
			templateUrl: 'templates/nointernet.html',
			controller: 'nointernetCtrl'
		  }
		}
	  }) 
	
	.state('app.register', {
      url: '/register',
      views: {
        'menuContent': {
          templateUrl: 'templates/register.html',
          controller: 'signupCtrl'
        }
      }
    })
	
	
   
	.state('app.dashboard', {
      url: '/dashboard',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/dashboard.html',
          controller: 'dashboardCtrl'
        }
      }
    }) 

	.state('app.quote_step_1', {
      url: '/quote_step_1',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/quote_step_1.html',
          controller: 'QuoteStep1Ctrl'
        }
      }
    }) 
	
	.state('app.quote_step_2', {
      url: '/quote_step_2',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/quote_step_2.html',
          controller: 'QuoteStep2Ctrl'
        }
      }
    })
	
	.state('app.quote_step_3', {
      url: '/quote_step_3',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/quote_step_3.html',
          controller: 'QuoteStep3Ctrl'
        }
      }
    })
	
	.state('app.quote_step_4', {
      url: '/quote_step_4',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/quote_step_4.html',
          controller: 'QuoteStep4Ctrl'
        }
      }
    })
	
	.state('app.quote_step_5', {
      url: '/quote_step_5',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/quote_step_5.html',
          controller: 'QuoteStep5Ctrl'
        }
      }
    })
	
	.state('app.quote_step_6', {
      url: '/quote_step_6',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/quote_step_6.html',
          controller: 'QuoteStep6Ctrl'
        }
      }
    })
	
	.state('app.quote_step_7', {
      url: '/quote_step_7',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/quote_step_7.html',
          controller: 'QuoteStep7Ctrl'
        }
      }
    })
	
	.state('app.quote_step_8', {
      url: '/quote_step_8',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/quote_step_8.html',
          controller: 'QuoteStep8Ctrl'
        }
      }
    })
	
	.state('app.sync_data', {
      url: '/sync_data',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/sync_data.html',
          controller: 'SyncDataCtrl'
        }
      }
    })
	
	.state('app.thanks', {
      url: '/thanks',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/thanks.html',
          controller: 'ThanksCtrl'
        }
      }
    })
	
	.state('app.upload_image', {
      url: '/upload_image',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/upload_image.html',
          controller: 'uploadImageCtrl'
        }
      }
    })
	
	.state('app.upload_more_image', {
      url: '/upload_more_image/:id',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/upload_more_image.html',
          controller: 'uploadMoreImageCtrl'
        }
      }
    })
	
	.state('app.signpage', {
      url: '/signpage',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/signpage.html',
          controller: 'signpageCtrl'
        }
      }
    })
	
	
	.state('app.submit_plan', {
      url: '/submit_plan/:plan_id',
	  cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/submit_plan.html',
          controller: 'submitPlanCtrl'
        }
      }
    })
	
	.state('app.listing', {
      url: '/listing',
	  
      views: {
        'menuContent': {
          templateUrl: 'templates/listing.html',
          controller: 'listingCtrl'
        }
      }
    })
	
	.state('app.ticket_detail', {
      url: '/ticket_detail/:id',
	  
      views: {
        'menuContent': {
          templateUrl: 'templates/ticket_detail.html',
          controller: 'ticketDetailCtrl'
        }
      }
    })
	
	.state('app.confirm_area', {
      url: '/confirm_area',
	   cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/confirm_area.html',
          controller: 'confirmAreaCtrl'
        }
      }
    })
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});



function onCropPleaseWait(){
	document.getElementById('crop_please_wait').textContent = 'Please wait...';
}
var SiteUrl	=	'http://localhost/projects/lawn_site/web_services';
var country	=	'US';
var SiteUrl	=	'http://lawnsite.yeswebstudio.com/web_services';


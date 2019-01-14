
/* App Definition */
var displayDataApp = angular.module('displayDataApp', ['ngRoute', 'displayDataControllers', 'displayDataAppDirectives']);


/* App Controllers */
var displayDataControllers = angular.module('displayDataControllers', []);


/* App Routing */
displayDataApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/alluser/alluser.html',
                controller: 'alluserController'
            }).
            when('/extra', {
                templateUrl: 'views/alluserextra/alluserextra.html',
                controller: 'alluserextraController'
            }).
            when('/singleuser', {
                templateUrl: 'views/singleuser/singleuser.html',
                controller: 'singleuserController'
            }).otherwise({
                redirectTo: '/'
            });
    }]);

/* Main page controller*/
displayDataControllers.controller('mainController',['$scope','$location','$rootScope',
 function( $scope, $location, $rootScope) {


 	$scope.nagivateTo = (destination) => {
 		$location.path("/"+destination);
 	}

 	$scope.activeButton = () => {
 		$scope.currentUrl = $location.path();
 	}

	//detec changes on url to set active button
 	$rootScope.$on("$routeChangeSuccess", function(event, current, previous, rejection){
 		$scope.activeButton();
 	})


}]);

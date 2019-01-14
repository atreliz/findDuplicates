
displayDataControllers.controller('alluserController',['$scope','$location','displayDataApi',
 function( $scope, $location, displayDataApi) {
	
	    // Variables on view
	    $scope.data = {};
	    $scope.error = false;

	    $scope.init = function(){

			// Getting data from API
			displayDataApi.getList().then(
 				(response) => { //success
 					$scope.error = false;
 					$scope.data = response;
 				}, (error) => {//fail
 					$scope.error = true;
			        $scope.errorDescription = 'Not able to retrieve users data';
			     }); 

	    }

		// Init the view
	    $scope.init();
	    

}]);

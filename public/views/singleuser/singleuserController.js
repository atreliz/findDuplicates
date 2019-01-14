
displayDataControllers.controller('singleuserController',['$scope', '$location','displayDataApi',
 function( $scope, $location , displayDataApi) {
		
	    // Variables on view
	    $scope.users = [];

		// this will retrieve the user/duplcited users to display on the view
	    $scope.init = function(){

	    	displayDataApi.retrieveUser().then(
 				(response) => { //success
 					$scope.users = response;
 				}, (error) => {//fail
 					//handle error here
			     }); 
	    }


		//init the flow
	    $scope.init();
	    
    }]);
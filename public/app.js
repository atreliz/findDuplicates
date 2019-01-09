var displayData = angular.module('displayData', []);


displayData.controller('mainController', function mainController($scope, $http) {

    // this will store the data to display on the view
    $scope.data = {};

    $scope.init = function(){

		//getting data from API
	    $http.get('/api/users')
	        .success(function(data) {
	            $scope.data = data;
	        })
	        .error(function(data) {
	            console.log('Error' );
	        });
    }


	//init the flow
    $scope.init();
});
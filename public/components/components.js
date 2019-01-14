var displayDataAppDirectives = angular.module('displayDataAppDirectives', []);

// display list of user
displayDataAppDirectives.directive('listOfUsersComponent', function() {
    return {
        restrict: 'E',
        scope: {
            title:"@",
            data:"="
        },
        link: function(scope, element, attrs) {             
        },
        templateUrl: '../components/listofusersComponent.html'
    };
});

// reusable headers for users table
displayDataAppDirectives.directive('tableComponent', function(displayDataApi, $location) {
    return {
        restrict: 'E',
        scope: {
            mode:"=",
            data:"=",
            title:"@"
        },
        link: function(scope, element, attrs) {  
            
            scope.loadUser = function(user, mode){
                // save user on service
                displayDataApi.saveUser(user).then(
                    (response) => { //success
                        if(response){
                            $location.path("/singleuser");
                        }
                    }, (error) => {//fail
                        //handle error here
                     }); 
            }

        },
        templateUrl: '../components/tableComponent.html'
    };
});


// display one user data
displayDataAppDirectives.directive('singleUserComponent', function() {
    return {
        restrict: 'E',
        scope: {
            user:"="
        },
        link: function(scope, element, attrs) {             
        },
        templateUrl: '../components/singleuserComponent.html'
    };
});
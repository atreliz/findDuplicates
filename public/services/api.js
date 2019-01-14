displayDataApp.factory('displayDataApi', ['$q', '$http', function ($q, $http) {

	let savedUser=[];

	// API to retrieve data from server
    function getList(){

        let apiUrl = '/api/users';
        let deferred = $q.defer();

        $http({
            'method': 'GET',
            'url': apiUrl,
            'headers': {'Content-Type': 'application/json'}
        }).
            success(function (data, status) {
                deferred.resolve(data);
            }).
            error(function (data, status) {
                deferred.reject(data);
            });
        return deferred.promise;
    }

	// service to pass data to another view
    function saveUser(user){

        let deferred = $q.defer();

        savedUser = user;

        //save for offline mode
        sessionStorage.setItem("savedUser", JSON.stringify(savedUser));

        deferred.resolve(true);

        return deferred.promise;
    }

	// service to retrieve data from the view
    function retrieveUser(){

        let deferred = $q.defer();

        if(savedUser.length === 0){ // if is empty get from offline copy
        	savedUser = JSON.parse( sessionStorage.getItem("savedUser") );
        }

        deferred.resolve(savedUser);
        return deferred.promise;
    }



    return {
            getList : getList,
            saveUser : saveUser,
            retrieveUser : retrieveUser
    };
}]);

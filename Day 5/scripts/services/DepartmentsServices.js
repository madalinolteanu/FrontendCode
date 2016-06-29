hrApp.service('DepartmentsServices', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
    return {
        findAll: function(){
            return $http.get(CommonResourcesFactoryBackup.findAllDepartmentsUrl)
                .success(function (data) {
                    return data;
                }).error(function(error){
                    return {error: " EROARE !"}
                }
                )
        }
    }
}]);


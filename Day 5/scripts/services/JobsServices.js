hrApp.service('JobsServices', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
    return {
        findAll: function () {
            return $http.get(CommonResourcesFactoryBackup.findAllJobsUrl)
                .success(function (data) {
                    return data;
                }).error(function(error){
                        return {error: " EROARE !"}
                    }
                )
        }
    }
}]);


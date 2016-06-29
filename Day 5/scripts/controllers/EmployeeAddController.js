hrApp.controller('EmployeeAddController', ['$scope','$routeParams', '$http', '$location','CommonResourcesFactoryBackup','DepartmentsServices','JobsServices','EmployeeService',
    function($scope, $routeParams, $http, $location, CommonResourcesFactoryBackup,DepartmentsServices,JobsServices,EmployeeService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";
        $scope.departments = [];
        $scope.managers = [];
        $scope.jobs = [];

        DepartmentsServices.findAll()
            .then(function (res) {
                $scope.departments = res.data;
            }, function (err) {
                console.log("Error at departments/findOne: " + err);
            });
        EmployeeService.findAll()
            .then(function (res) {
                $scope.managers = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });
        JobsServices.findAll()
            .then(function (res) {
                $scope.jobs = res.data;
            }, function (err) {
                console.log("Error at jobs/findOne: " + err);
            });
        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };
        

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
            alert("Salvat");
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);
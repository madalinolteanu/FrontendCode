hrApp.controller('JobListController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup',
    function ($scope, $http, $location, CommonResourcesFactoryBackup) {

        $scope.jobs = [];

        /*
         $scope.employees = [
         {
         "id": 100,
         "firstName": "Steven",
         "lastName": "King",
         "email": "SKING",
         "phoneNumber": "515.123.4567",
         "hireDate": "1987-06-17",
         "jobId": 1,
         "salary": 24000.00,
         "commissionPct": null,
         "managerId": null,
         "departmentId": 90
         }*/
    /*
        $http({url: CommonResourcesFactoryBackup.findAllEmployeesUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.employees = data;
            });

        $scope.viewEmployee = function (employeeId) {
            $location.url('/employeeView/' + employeeId);
        };

        $scope.editEmployee = function(employeeId) {
            $location.url('/employeeEdit/' + employeeId);
        };
        $scope.deleteemployee = function (employee) {
            $http({url: CommonResourcesFactoryBackup.deleteEmployeeUrl, method: 'DELETE', data: $scope.employee}) // Se duce la server si apeleaza metoda "DELETE' si sterge!!
                .success(function () {
                    $location.url('/employeeList');
                });
            alert("Sters");
        };
     */
    }]);
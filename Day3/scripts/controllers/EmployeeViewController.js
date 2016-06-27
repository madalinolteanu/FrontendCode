hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location',
    function($scope, $http, $routeParams, $location) {

        $scope.employee = {};

        $http.get("http://hrapp-zth.rhcloud.com/hrapp/employees" +'/' + $routeParams.employeeid)
            .success(function(data,status,headers,config){
                $scope.employee=data;
            })
            .error(function(data,status,headers,config){
                alert("Error:"+status);
            });

        $scope.back = function() {
            $location.path("/employeeslist");
        }

    }]);
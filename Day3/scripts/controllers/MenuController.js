hrApp.controller('MenuController', ['$scope','MenuServices', function($scope, MenuServices){
    $scope.employeeActionList = MenuServices;

    // TODO #12 - load menu items from Value

    $scope.currentDate = new Date();

}]);

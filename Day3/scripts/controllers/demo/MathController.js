hrApp.controller('MathController', ['$scope', 'MathServices', function($scope,MathServices){

    $scope.calculate = function(a,b) {
        $scope.op1 = MathServices.add(a,b)
        $scope.op2 = MathServices.substract(a,b);
        $scope.op3 = MathServices.multiply(a,b);
        $scope.op4 = MathServices.devide(a,b);
        
    }

}]);

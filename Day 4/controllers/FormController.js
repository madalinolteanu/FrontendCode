myApp.controller('FormController', ['$scope', function($scope) {

    $scope.toggleErrorShow = function(){
        if($scope.myForm.input.$valid == true)
            alert("SICA A SCRIS CEVA !!!!");
    }

}]);

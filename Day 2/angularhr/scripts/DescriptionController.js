/**
 * Created by user on 6/24/2016.
 */
myApp.controller('DescriptionController',function($scope,$rootScope){
    $scope.title='Two Way Binding Demo',
    $scope.childtemplate ='templates/childscome.html',
    $scope.resetFirstVariable = function(){
        $scope.firstVariable = undefined;
    }
    $scope.setFirstVariable = function(val){
        $scope.firstVariable = val;
    }
    $scope.descriptionShow = true;
    $scope.toggleDescriptionShow = function(){
        $scope.descriptionShow = !$scope.descriptionShow;
    }
});
/**
 * Created by user on 6/25/2016.
 */

myApp.controller('ScopeController',function($rootScope,$scope){
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable=function(){
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val){
        $scope.firstVariable = val;
    };
})
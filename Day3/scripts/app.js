var hrApp = angular.module('hrApp',['ngRoute']);
hrApp.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.when('/',{
            templateUrl:'views/main.html',
            controller:'MainController'
        }).
        when('/math', {
            templateUrl: 'views/demo/math.html',
            controller: 'MathController'
        }).
        when('/numbers', {
            redirectTo:'/math'
        }).
            when('/demoRequest',{
                templateUrl:'views/demo/request.html',
                controller:'RequestController'
        }).
            when('/employeeslist',{
            templateUrl: 'views/employeelist.html',
            controller: 'EmployeeListController'
        }).
            when('/employeeview/:employeeid',{
            templateUrl:'views/employeeview.html',
            controller:'EmployeeViewController'
        }).
            otherwise({
                redirectTo:'/'
            });

    }]);



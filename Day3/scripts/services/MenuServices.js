hrApp.factory('MenuServices',function(){
    var employeesList = [{

        label: "Employee list",
        url: "#/employeeslist"
    },
        {
            label: "Add employee",
            url: "#/employeeadd"
        }];

    return employeesList;
});
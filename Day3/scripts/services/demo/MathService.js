hrApp.service('MathService', function () {
        return {
            add: function (a,b) {
                return a+b;
            },
            substract: function (a,b) {
                return a-b;
            },
            multiply: function (a,b) {
                return a*b;
            },
            devide : function (a,b) {
                return a/b;
            }
        }
    }
);
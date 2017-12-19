var myApp = angular.module("myApp", []);
// console.log(myApp);
myApp.controller('DivRepeatController', function DivRepeatController($scope) {
    $scope.appDeveloper = "This is example of ng-bind";
    $scope.phones = [{
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.'
    }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.'
    }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.'
    }];

    $scope.cityNames = [{
            name: 'Jani',
            country: 'Norway'
        },
        {
            name: 'Carl',
            country: 'Sweden'
        },
        {
            name: 'Margareth',
            country: 'England'
        },
        {
            name: 'Hege',
            country: 'Norway'
        },
        {
            name: 'Joe',
            country: 'Denmark'
        },
        {
            name: 'Gustav',
            country: 'Sweden'
        },
        {
            name: 'Birgit',
            country: 'Denmark'
        },
        {
            name: 'Mary',
            country: 'England'
        },
        {
            name: 'Kai',
            country: 'Norway'
        }
    ];

    $scope.orderByMe = function (x) {
        $scope.myOrderBy = x;
    }
});

var dcApp = angular.module('dcApp',['ngAnimate','ngRoute'])
.config(['$routeProvider',
    function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true);
        $routeProvider.
            when('/intro',{
                templateUrl: '/intro/intro.html',
                controller: '/intro/introCtrl'
            }).
            otherwise({
                redirectTo: '/intro'
            });
    }]);
/**
 * Created by banht_000 on 5/6/2015.
 */

angular
    .module('TravelApplication', ['ngMaterial', 'ngMdIcons', 'ngRoute'])
    .controller('ApplicationController', function ($scope, $mdSidenav) {
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };
    })
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/tours', {
                templateURL: 'views/tours.html',
                controller: 'TourController'
            })
            .otherwise({
                redirectTo: '/tours'
            })
    }]);
/**
 * Created by banht_000 on 5/6/2015.
 */

angular
    .module('TravelApplication', ['ngMaterial', 'ngMdIcons', 'ngRoute', 'textAngular'])
    .controller('ApplicationController', function ($scope, $mdSidenav) {
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };
    })
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/tours', {
                templateUrl: '/admin/views/tours.html',
                controller: 'TourController'
            })
            .when('/tours/add', {
                templateUrl: '/admin/views/editTour.html'
            })
            .otherwise({
                redirectTo: '/tours'
            });
    }]);
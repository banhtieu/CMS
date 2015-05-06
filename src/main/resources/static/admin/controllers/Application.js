/**
 * Created by banht_000 on 5/6/2015.
 */

angular
    .module('TravelApplication', ['ngMaterial', 'ngMdIcons'])
    .controller('ApplicationController', function ($scope, $mdSidenav) {
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };
    });
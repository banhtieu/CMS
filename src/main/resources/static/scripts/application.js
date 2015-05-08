/**
 * Created by phuongjolly on 5/7/15.
 */

$(document).ready(function(){
    $(".dropdown").dropdown();
});

var application = angular.module("TravelApp", []);

application.controller("BookingController", function($scope){

    $scope.booking = {
        numberOfAdults: 0,
        numberOfChildren: 0,
        adultPrice: 50,
        childrenPrice: 20
    };

    $scope.counters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

});
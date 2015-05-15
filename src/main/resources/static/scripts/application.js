/**
 * Created by phuongjolly on 5/7/15.
 */

$(document).ready(function(){
    $(".dropdown").dropdown();
});

var application = angular.module("TravelApp", ['ngSanitize']);

application.controller("BookingController", function($scope){

    $scope.booking = {
        numberOfAdults: 0,
        numberOfChildren: 0,
        adultPrice: 50,
        childrenPrice: 20
    };

    $scope.counters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

});

application.controller("TourDetailController", function($scope){
    $scope.tour = {

        images:
            [
                {
                    url: "images/1_medium.jpg"
                },
                {
                    url: "images/2_medium.jpg"
                },
                {
                    url: "images/3_medium.jpg"
                },
                {
                    url: "images/4_medium.jpg"
                },
                {
                    url: "images/5_medium.jpg"
                },
                {
                    url: "images/6_medium.jpg"
                }
            ],
        description:
            "<div class='row'>"
            + "<h4>Paris in love</h4>"
            + "<div class='content'>Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit constituam, an mel iudico constituto efficiendi. Eu ponderum mediocrem has, vitae adolescens in pro. Mea liber ridens inermis ei, mei legendos vulputate an, labitur tibique te qui.</div>"
            + "<h4>What's include</h4>"
            + "<div class='content'>Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit constituam, an mel iudico constituto efficiendi.</div>"
            + "</div>"
            + "<div class='row'>"
            + "<div class='ui grid'>"
            + "<div class='eight wide column'>"
            + "<div class='ui bulleted list'>"
            + "<a class='item'>Lorem ipsum dolor sit amet</a>"
            + "<a class='item'>Lorem ipsum dolor sit amet</a>"
            + "<a class='item'>Lorem ipsum dolor sit amet</a>"
            + "<a class='item'>Lorem ipsum dolor sit amet</a>"
            + "<a class='item'>Lorem ipsum dolor sit amet</a>"
            + "</div>"
            + "</div>"
            + "<div class='eight wide column'>"
            + "<div class='ui bulleted list'>"
            + "<a class='item'>Lorem ipsum dolor sit amet</a>"
            + "<a class='item'>Lorem ipsum dolor sit amet</a>"
            + "<a class='item'>Lorem ipsum dolor sit amet</a>"

            + "</div>"
            + "</div>"
            + "</div>"
            + "</div>",
        schedules:
            [
                {
                    'day': 'Monday - Friday',
                    'time': '8:00 - 17:00'
                },
                {
                    'day': 'Saturday, Sunday',
                    'time': '10:00 - 18:00'
                },
                {
                    'day': 'Saturday, Sunday',
                    'time': '10:00 - 18:00'
                },
                {
                    'day': 'Saturday, Sunday',
                    'time': '10:00 - 18:00'
                },
                {
                    'day': 'Saturday, Sunday',
                    'time': '10:00 - 18:00'
                }

            ]
    }


});


application.controller("TourInfoController", function($scope){
    $scope.phone =  "+45 423 445 99";
    $scope.date = "Monday to Friday 9.00am - 7.30pm";
});

application.controller("HomeTour", function($scope){
    $scope.tour = {

    }
});

application.controller("PlaceInfoController", function($scope){
   $scope.place = {
       images: [
           {
               url: "images/1_medium.jpg"
           },
           {
               url: "images/2_medium.jpg"
           },
           {
               url: "images/3_medium.jpg"
           },
           {
               url: "images/4_medium.jpg"
           },
           {
               url: "images/5_medium.jpg"
           },
           {
               url: "images/6_medium.jpg"
           }
       ]
   }
});
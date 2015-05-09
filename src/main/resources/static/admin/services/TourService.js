/**
 * Created by banhtieu on 5/8/15.
 */


var application = angular.module("TravelApplication");

application.factory("tourService", function($scope){
        $scope.tours = [
            {
                'name': 'Hue',
                'description': 'This is very nice trip around the city'
            },
            {
                'name': 'Hue',
                'description': 'This is very nice trip around the city'
            },
            {
                'name': 'Hue',
                'description': 'This is very nice trip around the city'
            }
        ];
    }
);
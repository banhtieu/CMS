/**
 * Created by phuongjolly on 4/30/15.
 */

angular.module('travelApp', [])
    .controller('AllToursController', function(){
        var controller = this;
        controller.tours = [
            {
                'title': 'Hoi An',
                'description': 'An Ancient city in middle of Vietnam'
            },
            {
                'title': 'Da Nang',
                'description': 'A Modern city near Hoi An.'
            },
            {
                'title': 'Da Nang',
                'description': 'A Modern city near Hoi An.'
            },
            {
                'title': 'Da Nang',
                'description': 'A Modern city near Hoi An.'
            },
            {
                'title': 'Da Nang',
                'description': 'A Modern city near Hoi An.'
            },
        ];
    });
/**
 * Created by phuongjolly on 4/30/15.
 */

angular.module('travelApp', [])
    .controller('AllToursController', function(){
        var controller = this;
        controller.tours = [
            {
                'title': 'Historic Buildings',
                'description': 'An Ancient city in middle of Vietnam',
                'image': "images/hue_historic_building.jpg"
            },
            {
                'title': 'Churches',
                'description': 'A Modern city near Hoi An.',
                'image': "images/hue_church.jpg"
            },
            {
                'title': 'Beach',
                'description': 'A Modern city near Hoi An.',
                'image': "images/hue_beach.jpg"
            },
            {
                'title': 'Thien Mu Pagoda',
                'description': 'A Modern city near Hoi An.',
                'image': "images/hue_thienmu.jpg"
            },
            {
                'title': 'Ba Na Hill',
                'description': 'A Modern city near Hoi An.',
                'image': "images/bana_hill.jpg"
            },
            {
                'title': 'Hai Van Pass',
                'description': 'A Modern city near Hoi An.',
                'image': 'images/haivan_pass.jpg'
            },
        ];

        controller.destinations = [
            {
                'title': 'Hoi An',
                'description': 'An Ancient city in middle of Vietnam',
                'image': 'images/hoian.jpg'
            },
            {
                'title': 'Da Nang',
                'description': 'A Modern city near Hoi An.',
                'image': 'images/bana_hill.jpg'
            },
            {
                'title': 'Hue',
                'description': 'A Modern city near Hoi An.',
                'image': 'images/1_hue.jpg'
            },
            {
                'title': 'Quang Nam',
                'description': 'A Modern city near Hoi An.',
                'image': 'images/quangnam.jpg'
            },
            {
                'title': 'Nha Trang',
                'description': 'A Modern city near Hoi An.',
                'image': 'images/nhatrang.jpg'
            },
            {
                'title': 'Phan Thiet',
                'description': 'A Modern city near Hoi An.',
                'image': 'images/phanthiet.jpg'
            },
        ];
    });
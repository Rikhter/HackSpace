angular.module('myApp', []).controller(
  'AppCtrl', function($scope) {
    $scope.library = [
        {
            img: 'https://farm9.staticflickr.com/8455/8048926748_1bc624e5c9_d.jpg',
            name: 'Davey Jones Locker',
            blurb: 'The black spot!'
        },
        {
            img: 'https://farm4.staticflickr.com/3261/2801924702_ffbdeda927_d.jpg',
            name: 'Animal Farm',
            blurb: 'Animals rise up and rebel'
        }
    ];
});

var app = ons.bootstrap('predictable-app', [
    'onsen',
    'ngRoute',
    'ngSanitize',
    'ngAnimate',
    'ngTouch',
    'app.controllers',
    'app.services'
]).
config(['$provide', function($provide) {

    var CONFIG = {
        user_id: 1,
        baseUrl: 'http://localhost:3000',
        version: 'v1'
    };
    $provide.value('CONFIG', CONFIG);
}]);
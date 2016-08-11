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
        
    };
    $provide.value('CONFIG', CONFIG);
}]);
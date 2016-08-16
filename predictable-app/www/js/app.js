var app = ons.bootstrap('predictable-app', [
    'onsen',
    'ngRoute',
    'ngSanitize',
    'ngAnimate',
    'ngTouch',
    'angular-oauth2',
    'app.controllers',
    'app.services'
]).
config(['$provide', 'OAuthProvider', function($provide, OAuthProvider) {

    var CONFIG = {
        baseUrl: 'http://localhost:3000',
        version: 'v1'
    };
    $provide.value('CONFIG', CONFIG);

    OAuthProvider.configure({
        baseUrl: CONFIG.baseUrl + '/'+ CONFIG.version,
        clientId: 'clientId',
        clientSecret: 'clientSecret',
        grantPath: '/access_tokens'
    });
}])
.run(['$rootScope', '$window', 'OAuth', function($rootScope, $window, OAuth) {
    $rootScope.$on('oauth:error', function(event, rejection) {
        // Ignore `invalid_grant` error - should be catched on `LoginController`.
        if ('invalid_grant' === rejection.data.error) {
            return;
        }

        // Refresh token when a `invalid_token` error occurs.
        if ('invalid_token' === rejection.data.error) {
            return OAuth.getRefreshToken();
        }

        // Redirect to `/login` with the `error_reason`.
        return $window.location.href = '/login?error_reason=' + rejection.data.error;
    });
}]);
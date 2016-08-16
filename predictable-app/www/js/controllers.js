/**
 * Created by jduggan on 11/08/2016.
 */
var controllers = angular.module('app.controllers', []);

controllers.controller('PageController', ['$scope', 'matchService', 'predictionService', 'userService', function($scope, matchService, predictionService, userService) {
    $scope.predictions = [];
    $scope.matches = [];
    $scope.match = {};
    loadMatches();
    loadPredictions();

    $scope.showPage = function(page){
        $scope.pageNavigator.pushPage(page, {animation: "lift"});
    };

    $scope.showMatchDetail = function(matchId){
        $scope.match = {};
        $scope.prediction = {};
        
        matchService.find(matchId).then(function(result){
            $scope.match = result.data.data;
        });
        predictionService.findByMatch(matchId).then(function(result){
            $scope.prediction = result.data.data;
        });
        $scope.showPage('components/matches/detail.html');
    };

    $scope.predictMatch = function(result){
        predictionService.create($scope.match.id, result).then(function(result){
            loadPredictions();
            $scope.pageNavigator.popPage();
            $scope.pageTabBar.setActiveTab(1);
        });
    };

    function loadMatches(){
        matchService.list().then(function(result){
            $scope.matches = result.data.data;
        });
    }

    function loadPredictions(){
        predictionService.list().then(function(result){
            $scope.predictions = result.data.data;
        });
    }
}]);

controllers.controller('LoginController', ['$scope', '$rootScope', 'userService', function($scope, $rootScope, userService) {
    $scope.login = {};
    $scope.login.username = '';
    $scope.login.password = '';

    $scope.login = function(){
        var user = {
            username: $scope.login.username,
            password: $scope.login.password
        };
        userService.login($scope.login.username, $scope.login.password).then(function(){
            
        });
    };

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
       // return $window.location.href = '/login?error_reason=' + rejection.data.error;
    });
}]);
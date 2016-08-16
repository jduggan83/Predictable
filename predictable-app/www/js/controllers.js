/**
 * Created by jduggan on 11/08/2016.
 */
var controllers = angular.module('app.controllers', []);

controllers.controller('PageController', ['$scope', 'matchService', 'predictionService', 'loginService', function($scope, matchService, predictionService, loginService) {
    $scope.predictions = [];
    $scope.matches = [];
    $scope.match = {};
    $scope.login = {};
    $scope.login.username = '';
    $scope.login.password = '';

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

    $scope.login = function(){
        loginService.login($scope.login.username, $scope.login.password).then(function(){
            $scope.showPage('components/common/splitter.html');
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


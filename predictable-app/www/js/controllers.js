/**
 * Created by jduggan on 11/08/2016.
 */
var controllers = angular.module('app.controllers', []);

controllers.controller('PageController', ['$scope', 'matchService', 'predictionService', function($scope, matchService, predictionService) {
    $scope.predictions = [];
    $scope.prediction = {};
    $scope.matches = [];
    $scope.match = {};

    loadMatches();
    loadPredictions();

    $scope.showPage = function(page){
        $scope.pageNavigator.pushPage(page, {animation: "lift"});
    };

    $scope.showMatch = function(match){
        $scope.showPage('components/matches/detail.html');
        $scope.match = match;
    };



    $scope.predictMatch = function(result){
        predictionService.create($scope.match.id, result).then(function(result){
            loadPredictions();
            $scope.pageTabBar.setActiveTab(1);
        });
    };

    $scope.showPrediction = function(prediction){
        $scope.showPage('components/matches/detail.html');
        $scope.prediction = prediction;
    };



    function loadPredictions(){
        matchService.list().then(function(result){
            $scope.matches = result.data.data;
        });
    }

    function loadMatches(){
        predictionService.list().then(function(result){
            $scope.predictions = result.data.data;
        });
    }
}]);


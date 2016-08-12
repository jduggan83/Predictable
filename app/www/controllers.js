/**
 * Created by jduggan on 11/08/2016.
 */
var controllers = angular.module('app.controllers', []);

controllers.controller('MenuController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.showPage = function(page){
        $scope.menu.setMainPage(page, {closeMenu: true})
    };

    $rootScope.$on('prediction:created', function(events, args){
        $scope.showPage('components/predictions/main.html');
    });
}]);

controllers.controller('MatchController', ['$scope', 'matchService', 'predictionService', '$rootScope', function($scope, matchService, predictionService, $rootScope) {
    $scope.matches = [];
    $scope.match = {};

    $scope.showMatch = function(match){
        $scope.matchNavigator.pushPage('components/matches/detail.html', {animation: "slide"});
        $scope.match = match;
    };

    matchService.list().then(function(result){
        $scope.matches = result.data.data;
    });

    $scope.predictMatch = function(result){
        predictionService.create($scope.match.id, result).then(function(result){
            $rootScope.$broadcast('prediction:created', {predictionId: result.data.id});
        });
    };
}]);

controllers.controller('PredictionController', ['$scope', 'predictionService', function($scope, predictionService) {
    $scope.predictions = [];
    $scope.prediction = {};

    $scope.showPrediction = function(prediction){
        $scope.predictionNavigator.pushPage('components/predictions/detail.html', {animation: "slide"});
        $scope.prediction = prediction;
    };

    predictionService.list().then(function(result){
        $scope.predictions = result.data.data;
    });
}]);



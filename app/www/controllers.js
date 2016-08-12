/**
 * Created by jduggan on 11/08/2016.
 */
var controllers = angular.module('app.controllers', []);

controllers.controller('PageController', ['$scope', function($scope) {
    ons.ready(function() {
        // Init code here
    });

    $scope.pop = function(){
        console.log("dd");
    };
}]);

controllers.controller('MatchController', ['$scope', 'matchService', function($scope, matchService) {
    $scope.matches = [];

    matchService.list().then(function(result){
        $scope.matches = result.data.data;
    });
}]);
/**
 * Created by jduggan on 11/08/2016.
 */
var services = angular.module('app.services', []);

services.factory('matchService', ['$http', 'CONFIG', function($http, CONFIG) {
    return {
        list: function(){
            return $http.get('http://localhost:3000/v1/matches');
        },
        find:  function(matchId){
            return $http.get('http://localhost:3000/v1/matches/' + matchId);
        },
        create:  function(match){
            return $http.post('/matches', match);
        },
        update:  function(match){
            return $http.put('/matches' + match.id, match);
        }
    };
}]);

services.factory('predictionService', ['$http', 'CONFIG', function($http, CONFIG) {
    return {
        list: function(){
            return $http.get('http://localhost:3000/v1/predictions');
        },
        find:  function(predictionId){
            return $http.get('http://localhost:3000/v1/predictions/' + predictionId);
        },
        create:  function(prediction){
            return $http.post('/predictions', prediction);
        },
        update:  function(prediction){
            return $http.put('/predictions' + prediction.id, prediction);
        }
    };
}]);
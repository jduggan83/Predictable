/**
 * Created by jduggan on 11/08/2016.
 */
var services = angular.module('app.services', []);

services.factory('matchService', ['$http', 'CONFIG', function($http, CONFIG) {
    return {
        list: function(){
            return $http.get(CONFIG.baseUrl + '/'+ CONFIG.version + '/matches');
        },
        find:  function(matchId){
            return $http.get(CONFIG.baseUrl + '/'+ CONFIG.version + '/matches/' + matchId);
        },
        create:  function(match){
            return $http.post(CONFIG.baseUrl + '/'+ CONFIG.version + '/matches', match);
        },
        update:  function(match){
            return $http.put(CONFIG.baseUrl + '/'+ CONFIG.version + '/matches/' + match.id, match);
        }
    };
}]);

services.factory('predictionService', ['$http', 'CONFIG', function($http, CONFIG) {
    return {
        list: function(){
            return $http.get(CONFIG.baseUrl + '/'+ CONFIG.version + '/predictions');
        },
        find:  function(predictionId){
            return $http.get(CONFIG.baseUrl + '/'+ CONFIG.version + '/predictions/' + predictionId);
        },
        create:  function(matchId, result){
            var prediction = {
                user_id: 1,
                match_id: matchId,
                result: result
            };

            return $http.post(CONFIG.baseUrl + '/'+ CONFIG.version + '/predictions', prediction);
        },
        update:  function(prediction){
            return $http.put(CONFIG.baseUrl + '/'+ CONFIG.version + '/predictions/' + prediction.id, prediction);
        }
    };
}]);
/**
 * Created by jduggan on 11/08/2016.
 */
var services = angular.module('app.services', []);

services.factory('matchService', ['$http', 'CONFIG', function($http, CONFIG) {
    return {
        list: function(){
            return $http.get(CONFIG.baseUrl + '/'+ CONFIG.version + '/matches?access_token=' + CONFIG.access_token);
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

services.factory('predictionService', ['$http', 'CONFIG', 'userService', function($http, CONFIG, userService) {
    return {
        list: function(){
            return $http.get(CONFIG.baseUrl + '/'+ CONFIG.version + '/predictions?user__id='+ userService.getUserId());
        },
        find:  function(predictionId){
            return $http.get(CONFIG.baseUrl + '/'+ CONFIG.version + '/predictions/' + predictionId);
        },
        create:  function(matchId, result){
            var prediction = {
                match_id: matchId,
                result: result
            };

            return $http.post(CONFIG.baseUrl + '/'+ CONFIG.version + '/predictions?access_token=' + CONFIG.access_token, prediction);
        },
        update:  function(prediction){
            return $http.put(CONFIG.baseUrl + '/'+ CONFIG.version + '/predictions/' + prediction.id, prediction);
        },
        findByMatch:  function(matchId){
            return $http.get(CONFIG.baseUrl + '/'+ CONFIG.version + '/predictions?match__id' + matchId + '&user__id='+ userService.getUserId());
        }
    };
}]);

services.factory('userService', ['OAuth', function(OAuth) {
    var userId = null;

    return {
        login: function(username, password){
            var user = {
                username: username,
                password: password
            };
            return OAuth.getAccessToken(user).then(function(response){
                userId = response.data.data[0].user_id
            });
        },
        getUserId: function(){
            return userId;
        }
    };
}]);
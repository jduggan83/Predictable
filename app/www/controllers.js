/**
 * Created by jduggan on 11/08/2016.
 */
var controllers = angular.module('app.controllers', []);

controllers.controller('PageController', function($scope) {
    ons.ready(function() {
        // Init code here
        //onclick="myNavigator.pushPage('components/match-details/view.html', { 'animation': 'slide' })"
    });

    $scope.pop = function(){
        console.log("dd");
    };
});

controllers.controller('MatchController', function($scope, $q, $http) {
    $scope.MyDelegate = {
        configureItemScope: function(index, itemScope) {
            if (!itemScope.item) {
                console.log("Created item #" + index);
                itemScope.canceler = $q.defer();

                itemScope.item = {
                    title: 'Item #' + (index + 1),
                    label: '',
                    desc: '',
                    rand: Math.random()
                };
                $http.get('https://baconipsum.com/api/?type=meat-and-filler&sentences=1', {
                    timeout: itemScope.canceler.promise
                }).success(function(data) {
                    itemScope.item.desc = data[0];
                    itemScope.item.label = itemScope.item.desc.substr(0, itemScope.item.desc.indexOf(" ")) + 'bacon'
                }).error(function() {
                    itemScope.item.desc = 'No bacon lorem ipsum';
                    itemScope.item.label = 'No bacon'
                });
            }
        },
        calculateItemHeight: function(index) {
            return 91;
        },
        countItems: function() {
            return 10000000;
        },
        destroyItemScope: function(index, itemScope) {
            itemScope.canceler.resolve();
            console.log("Destroyed item #" + index);
        }
    };
});
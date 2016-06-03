var module = ons.bootstrap('my-app', ['onsen']);
      module.controller('AppController', function($scope) { });
      module.controller('PageController', function($scope) {
        ons.ready(function() {
          // Init code here
            //onclick="myNavigator.pushPage('components/match-details/view.html', { 'animation': 'slide' })"
        });
          $scope.pop = function(){
            console.log("dd");
          };
      });
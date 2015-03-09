angular.module('progressbars.home', []);

angular
  .module('progressbars.home')
  .controller('HomeCtrl', ['$scope', function($scope){
  	'use strict';

    $scope.bars = [25,40,70];

    $scope.selectedBar = 1; //setting the default bar

    // calculate the width
    $scope.calc = function(diff) {

    	var currentProgressVal = $scope.bars[$scope.selectedBar-1];
    	var result = currentProgressVal+diff;

		if(result<0) {
			result = 0;
		}

    	$scope.bars[$scope.selectedBar-1] = result;
    };

  }]);


angular.module('progressbars', [
  'ngRoute',
  'progressbars.home'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/home', {
      controller: 'HomeCtrl',
      templateUrl: '/progressbars/home/home.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});

(function(module) {
try {
  module = angular.module('progressbars');
} catch (e) {
  module = angular.module('progressbars', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/progressbars/home/home.html',
    '<div class="bars"><div class="bar" ng-repeat="b in bars track by $index" ng-class="{ \n' +
    '		    	\'active\': selectedBar-1 == $index,\n' +
    '		    	\'level1\': b<=25,\n' +
    '		    	\'level2\': b>25 && b<=50,\n' +
    '		    	\'level3\': b>50 && b<=75,\n' +
    '		    	\'level4\': b>75 && b<=100,\n' +
    '		    	\'overflow\': b>100\n' +
    '    		}"><span class="indicator" style="width:{{b}}%"></span> <span class="caption">{{b}}%</span></div></div><div class="action-bar"><div class="row"><div class="col-xs-5"><select ng-model="selectedBar" class="form-control"><option value="1">Progress A - {{bars[0]}}%</option><option value="2">Progress B - {{bars[1]}}%</option><option value="3">Progress C - {{bars[2]}}%</option></select></div><div class="col-xs-7"><div class="btn-group" role="group"><button type="button" class="btn btn-default" ng-click="calc(-25)">-25</button> <button type="button" class="btn btn-default" ng-click="calc(-10)">-10</button> <button type="button" class="btn btn-default" ng-click="calc(+10)">+10</button> <button type="button" class="btn btn-default" ng-click="calc(+25)">+25</button></div></div></div></div>');
}]);
})();

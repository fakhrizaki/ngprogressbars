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

'use strict';

var testDirectivesApp = angular.module("testDirectives", []);

testDirectivesApp.controller(
	"testDirectivesCtrl",
	["$scope", "$http", "$log", function($scope, $http, $log) {

	}]);

testDirectivesApp.directive('displayInput', function() {
	return {
		restrict: "E",
		replace: "true",
		templateUrl: "../views/directives/display-input.html"
	};
})
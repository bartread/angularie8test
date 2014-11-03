'use strict';

var testDirectivesApp = angular.module("testDirectives", []);

testDirectivesApp.controller(
	"testDirectivesCtrl",
	["$scope", "$http", "$log", function($scope, $http, $log) {
		$scope.policyType = "buildingsAndContents";
	}]);

testDirectivesApp.directive("displayInput", function() {
	return {
		scope: {
			userInput: "=userInput",
		},
		restrict: "E",
		replace: "true",
		templateUrl: "../views/directives/display-input.html"
	};
});

testDirectivesApp.directive("radioButton", function() {
	return {
		scope: {
			id: "@id",
			name: "@name",
			value: "@value",
			caption: "@caption",
			selection: "=selection"
		},
		restrict: "E",
		replace: "true",
		templateUrl: "../views/directives/radio-button.html"
	};
});

testDirectivesApp.directive("yesNoQuestion", function() {
	return {
		scope: {
			questionId: "@questionId",
			questionText: "@questionText",
			selection: "=selection"
		},
		restrict: "E",
		replace: "true",
		templateUrl: "../views/directives/yes-no-question.html"
	};
});

testDirectivesApp.directive("radioButtonQuestion", function() {
	return {
		scope: {
			questionId: "@questionId",
			questionText: "@questionText",
			selection: "=selection",
			options: "=options"	
		},
		restrict: "E",
		replace: "true",
		templateUrl: "../views/directives/radio-button-question.html"
	};
});
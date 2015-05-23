
var kensApp = angular.module('kensapp', []);

kensApp.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

kensApp.controller('kenscontroller', function($scope){
   $scope.testvalue = "hello angular";
});


var kensapp = angular.module('kensapp', []);

kensapp.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('//');
    $interpolateProvider.endSymbol('//');
});

kensapp.controller('kenscontroller', function(){
   this.testvalue = 'hello angular';
});

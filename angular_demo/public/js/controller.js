//retrieval has only one argument
// var myApp = angular.module('myApp');

angular.module('myApp')
.controller('myController', ['$scope', 'mainCharacter', function($scope, mainCharacter){ // create a controller. use $scope before controller is being used

  //dependencies injection
  $scope.myFirstName = 'Ross';
  $scope.myModel = 'Ready Player One';
  $scope.mainCharacter = mainCharacter; // this comes from js/vaules.js

}]);
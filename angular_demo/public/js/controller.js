//retrieval has only one argument
// var myApp = angular.module('myApp');

angular.module('myApp')
.controller('myController', ['$scope', function($scope){ // create a controller. use $scope before controller is being used

  $scope.myFirstName = 'Ross';
  console.log($scope.myModel = 'ready player one');
  $scope.myModel = 'Ready Player One';

}]);
//retrieval has only one argument
// var myApp = angular.module('myApp');

angular.module('myApp')
.controller('myController', ['$scope', 'mainCharacter', 'CharacterVersionFactory', 'BookService',  function($scope, mainCharacter, CharacterVersionFactory, BookService){ // create a controller. use $scope before controller is being used 
//think of $scope, mainCharacter, CharacterVersionFactory like import

  //dependencies injection
  $scope.myFirstName = 'Ross';
  $scope.myModel = 'Ready Player One';
  $scope.mainCharacter = mainCharacter; // this comes from js/vaules.js
  $scope.CharVer = CharacterVersionFactory.genCharVersion(); // this comes from js/factories.js
  //use .genCharVersion, which is the key, to run the function attach to CharacterVersionFactory which the object
  $scope.books = BookService.books;
}]);
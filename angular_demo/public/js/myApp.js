//creation uses a 2nd array argument to import dependencies 
angular.module('myApp', []); // angular is global, creating a new module called 'myApp'
														// needs a second argument

//retrieval has only one argument
var myApp = angular.module('myApp'); // retrive the above ^

myApp.controller('myController', ['$scope', function($scope){ // create a controller. use $scope before controller is being used

	$scope.myFirstName = 'Ross';
	$scope.myModel = 'Ready Player One';

}]);

myApp
.config(function(){
	//config
})
.run(function(){
	//initialize
	// runs before angular is even runned
});
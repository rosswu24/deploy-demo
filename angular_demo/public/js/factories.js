angular.module('myApp')
.factory('CharacterVersionFactory', ['mainCharacter', 'APP_VERSION', function(mainCharacter, APP_VERSION) {

  return {
    genCharVersion: function() { 
      return mainCharacter + ' ' + APP_VERSION;
    } // return a object genCharVersion with the key genCharVersion and the value is a function 
  };
}]);
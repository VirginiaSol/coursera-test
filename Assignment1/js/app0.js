(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

//LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menu = "";
  $scope.stateOfAppreciation = "";

  $scope.checkAppreciation = function () {
    console.log($scope.menu);
    var appreciation = checkResposnse($scope.menu);
    $scope.stateOfAppreciation = appreciation;
  };
  function checkResposnse(string) {
    var menuItemsMessage = "";
    var menuItemLength = (string.split(',')).length;
    console.log(menuItemLength);
    if(menuItemLength >= 1 && menuItemLength <= 3){
        menuItemsMessage = "Enjoy!";
      }else
      if(menuItemLength > 3){
        menuItemsMessage = "Too much!";
      }else {
        menuItemsMessage = "Please enter data first!";
      }
    }
    return menuItemsMessage;
  }

})();

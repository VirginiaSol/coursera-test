(function () {
'use strict';

var shoppingList = [
  {name: "Milk", quantity: "3 bottles"},
  {name: "Cookies", quantity: "8 bags"},
  {name: "Chocolate", quantity: "5 bars"},
  {name: "Butter", quantity: "3 bars"},
  {name: "Pepto Bismol", quantity: "3 bottles"}
];
var max = shoppingList.length;
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - ToBuyController
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;

  list1.toBuyItems = ShoppingListCheckOffService.gettoBuyItems();

  // Function to remove an item from 'toBuyItems' and add it to 'boughtItems'
  list1.removeItem = function(itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}

// LIST #2 - AlreadyBoughtController
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;

  list2.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;
  var toBuyItems = [];
  var boughtItems = [];

  // Move item from 'toBuyItems' to 'boughtItems'
  service.removeItem = function(itemIndex) {
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  };

  // Return the list of items to be bought
  service.gettoBuyItems = function() {
    toBuyItems = shoppingList;
    return toBuyItems;
  };

  // Return the list of already bought items
  service.getBoughtItems = function() {
    return boughtItems;
  };
}

})();

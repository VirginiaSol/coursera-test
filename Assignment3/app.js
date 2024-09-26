(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
    .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        title: '@',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };
    return ddo;
  }

  function FoundItemsDirectiveController() {
    var list = this;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var list = this;
    var origTitle = "Menu List";

    list.items = [];
    list.title = origTitle + " (" + list.items.length + " items)";
    list.searchTerm = "";

    list.getMatchedMenuItems = function () {
      var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);
      var found = [];
	  list.items = [];
	  list.title = origTitle + " (" + list.items.length + " items)";
      if(list.searchTerm !== ""){
        promise.then(function (response) {
          var dataOut = response.data;
          angular.forEach(dataOut, function (category) {
            angular.forEach(category.menu_items, function (item) {
              if (item.description && item.description.toLowerCase().indexOf(list.searchTerm.trim()) !== -1) {
                var itemElement = {
                  name: item.name,
                  short_name: item.short_name,
                  description: item.description
                };
                found.push(itemElement);
              }
            });
          });
          list.items = found;
          list.title = origTitle + " (" + list.items.length + " items)";
          if(list.items.length === 0){
            console.log("Nothing found.");
          }
        })
          .catch(function (error) {
            console.log("Something went wrong.");
          });
      } else {
        console.log("Nothing found.");
      }

    };

    list.removeItem = function (itemIndex) {
      console.log("Removing item at index:", itemIndex);
      list.items.splice(itemIndex, 1); // Directly remove the item from list
      list.title = origTitle + " (" + list.items.length + " items)"; // Update the title
    };
  }


  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath)
      });
    };
  }

})();

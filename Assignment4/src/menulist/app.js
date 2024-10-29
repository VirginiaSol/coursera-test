(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService),
.constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json"),
.constant('ApiBasePath1', "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"),
.controller('CategoriesController', CategoriesController),
.component('categories', {
  templateUrl: 'src/menulist/categories.template.html',
  controller: CategoriesController,
  bindings: {
    items: '<'
  }
});


CategoriesController.$inject = ['MenuDataService', 'items'];
function CategoriesController(MenuDataService, items) {
  var categories = this;
  categories.items = items;
}


MenuDataService.$inject = ['$q', '$timeout', '$http', 'ApiBasePath', 'ApiBasePath1']
function MenuDataService($q, $timeout) {
  var service = this;

  var categories = [];

  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath)
    });
    return response;
  };

  service.getItemsForCategory(categoryShortName) = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath1)
    });
    return response;
  };
}

})();

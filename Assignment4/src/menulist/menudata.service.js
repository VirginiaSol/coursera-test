(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);
// .constant('ApiBasePath', 'https://coursera-jhu-default-rtdb.firebaseio.com/categories.json')
// .constant('ApiBasePath1', 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/'+categoryShortName+'.json');

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: ('https://coursera-jhu-default-rtdb.firebaseio.com/categories.json')
    }).then(function(response) {
      return response.data;
    });
  };

  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: "GET",
      url: ('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/'+categoryShortName+'.json'),
       params: {category: categoryShortName}
    }).then(function(response) {
      return response.data.menu_items;
    });
  };
}


})();

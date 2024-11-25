(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);

var userData = [];
var items = [];
MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      return response.data;
    });
  };
  service.getMenuSignup = function (itemshortname) {

    var letterMatch = itemshortname.match(/[a-zA-Z]+/);
    var numberMatch = itemshortname.match(/\d+/);
    console.log(numberMatch);

    // Check if both matches are found
    if (letterMatch && numberMatch) {
        return $http({
            method: "GET",
            url: ApiPath + '/menu_items/' + letterMatch[0] + '/menu_items/' +
                 (numberMatch[0] - 1) + '/name.json',
            params: { short_name: itemshortname }
        }).then(function (response) {
            if (response.data) {
                return response.data;
            } else {
                throw new Error('No data found');
            }
        }).catch(function (error) {
            // Handle the error
            console.log('Error fetching data:', error);
            return null; // or any default value you'd like to return in case of an error
        });
    } else {
        // Handle the case where the matches are not found
        console.log('Invalid itemshortname format.');
        return Promise.reject('Invalid itemshortname format.');
    }
  };

  service.saveUserInfo = function (userData) {
    items = userData;
  // console.log(items);
  };
  service.getItems = function () {
    return items;
  };


}



})();

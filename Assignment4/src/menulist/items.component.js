(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menulist/templates/item-list.html',
  bindings: {
    items: '<'
  }
});


})();

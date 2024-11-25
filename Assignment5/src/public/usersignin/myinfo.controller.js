(function () {
    'use strict';
    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['MenuService'];
    function MyInfoController(MenuService) {
        var myInfoCtrl = this;
        //console.log(myInfoCtrl);
        myInfoCtrl.user = MenuService.getItems();
        myInfoCtrl.user.favoritMenu = myInfoCtrl.user.favoritMenu + myInfoCtrl.user.message;
        console.log(myInfoCtrl.user);
        myInfoCtrl.userExists = function () {
          if(myInfoCtrl.user.firstName === undefined){
            return false;
          }else{
            //myInfoCtrl.user.favoritMenu = myInfoCtrl.user.favoritMenu + " " + myInfoCtrl.user.message;
            return true;
          }
        };
      }
})();

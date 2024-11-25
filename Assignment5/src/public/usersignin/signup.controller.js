(function () {
    'use strict';
    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService', '$state'];
    function SignUpController(MenuService, $state) {
        var signUpCtrl = this;
        signUpCtrl.message = "";
        signUpCtrl.menuname ="";
        signUpCtrl.category = "";
        signUpCtrl.imgName = "";
        signUpCtrl.imgPath = "";

        signUpCtrl.submit = function () {
        signUpCtrl.completed = true;
            // Save user data
        signUpCtrl.localStorage = MenuService.getMenuSignup(signUpCtrl.favoritMenu).then(function(response) {
          signUpCtrl.menuname = response;
          signUpCtrl.category = (signUpCtrl.favoritMenu).match(/[a-zA-Z]/)[0];
          var numMatch = parseInt(signUpCtrl.favoritMenu.match(/\d+/)[0])-1;
          if(numMatch == 0) {
            signUpCtrl.imgName = signUpCtrl.category;
          }else {
            signUpCtrl.imgName = signUpCtrl.category + numMatch;
            console.log(signUpCtrl.imgName);
          }
          signUpCtrl.imgPath = "images/menu/" + signUpCtrl.category + "/" + signUpCtrl.imgName + ".jpg";

          if(signUpCtrl.menuname == null) {
            signUpCtrl.completed = false;
            console.log("False complete");
            signUpCtrl.message = "Cant find the specified dish in the menu";
          }
          }).catch(function(error){
            signUpCtrl.completed = false;
            console.log("Error:", error);
            signUpCtrl.message = "Error occurred:******** No such menu menu exists ********";
                // $state.go('signup');
          });

        MenuService.saveUserInfo(signUpCtrl);
        $state.go('public.menu');
      };
    }
})();

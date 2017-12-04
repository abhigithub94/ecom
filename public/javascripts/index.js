var app = angular.module('myapp', ["ngRoute","ngCookies"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html",
        controller : 'homectrl'
    })
    .when("/admin", {
        templateUrl : "adminlogin.html",
        controller : 'adminctrl'
    })
    .when("/adminup", {
        templateUrl : "admin.html",
        controller : 'adminupctrl'
    })
    .when("/product", {
        templateUrl : "product.html",
        controller : 'productctrl'
    })
    .when("/productdetail", {
        templateUrl : "productdetail.html",
        controller : 'productdetailctrl'
    })
    // .when("/maindialog", {
    //     templateUrl : "maindialog.html"
    // });
    
});
// app.controller('myctrl',function($scope,getsetdata)
// {
//     console.log("main controller is running");
// });
app.service('productService', function() {
  var productList = [];

  var addProduct = function(newObj) {
      productList.push(newObj);
  };

  var getProducts = function(){
      return productList;
  };

  return {
    addProduct: addProduct,
    getProducts: getProducts
  };

});

(function(){
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService']
function ToBuyController(ShoppingListCheckOffService){
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

  toBuy.buyItem = function (itemIndex){
    ShoppingListCheckOffService.buyItem(itemIndex);
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getItemsAlreadyBought();
}



function ShoppingListCheckOffService() {
    var service = this;
    var itemsToBuy = [
      {
        name : "Rum",
        quantity : 9
      },
      {
        name : "Bear",
        quantity : 8
      },
      {
        name : "Wine",
        quantity : 6
      },
      {
        name : "Vodka",
        quantity : 4
      },
      {
        name : "Pepsi",
        quantity : 2
      }

  ];
  var itemsAlreadyBought = [];

  service.getItemsToBuy = function (){
    return itemsToBuy
  };

  service.getItemsAlreadyBought = function (){
    return itemsAlreadyBought
  };

  service.buyItem = function (itemIndex){
    var item = {
      name : itemsToBuy[itemIndex].name,
      quantity : itemsToBuy[itemIndex].quantity
    };

    itemsAlreadyBought.push(item);
    itemsToBuy.splice(itemIndex, 1);
  };

}

})();

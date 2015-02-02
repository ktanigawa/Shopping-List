// CLASS : v-- basic calling of the class 
function ShoppingList (){
// this.items is the Constructor method that initializes items as an empty Array of Objects
  this.items = [];
}
// ShoppingList has a method named addItem that accepts a single ShoppingListItem argument
// item is shopping list item
ShoppingList.prototype.addItem = function( item ) {
  this.items.push(item);
};
// Go through the array and remove an item
// for loop for the length of the array
// in each loop check if its the item to remove
// if it is, remove it using the .slice method
ShoppingList.prototype.removeItem = function( item ){
  for (i = 0; i < this.items.length; i++) {
    if ( this.items[i] === item ) {
      this.items.splice(i,1);
    }
  }
};

ShoppingList.prototype.render = function(){
  var outputString = "";
  for (i = 0; i < this.items.length; i++) {
    // this.items[i] calls the render function in shopping_list_item.js  
    var item_html = this.items[i].render(); 
    // append the output string to the item_html why +1?
    outputString += item_html;

  }
  return "<ul>"+outputString+"</ul>"; 
};




// New instance of a shopping list 
var my_shopping_list = new ShoppingList();
// var fake_item_1 = {name:1};
// var fake_item_2 = {name:2};
// var fake_item_3 = {name:3};
var fake_item_1 = new ShoppingListItem("cereal", "Lucky Charms");
var fake_item_2 = new ShoppingListItem("snack", "Pocky");
var fake_item_3 = new ShoppingListItem("drink", "Water");

my_shopping_list.addItem(fake_item_1);
my_shopping_list.addItem(fake_item_2);
my_shopping_list.addItem(fake_item_3);
//console.log(my_shopping_list);
console.log(my_shopping_list.render());
// my_shopping_list.removeItem(fake_item_2);
// console.log(my_shopping_list);
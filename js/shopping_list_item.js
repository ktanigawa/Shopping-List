// Lines 2-7 Constructor Method
function ShoppingListItem (name, description) {
  // Instance properties
  this.name = name;
  this.description = description;
  this.is_done = false; // default
}

// Instance Method
ShoppingListItem.prototype.check = function() {
  // set is_done property to true
  this.is_done = true; 
};

ShoppingListItem.prototype.uncheck  = function() {
  this.is_done = false;
};

ShoppingListItem.prototype.render = function() {
// use single quotes for your js and use double where  html need them  class=""
 var some_html_output = 
    '<li class="completed_'+this.is_done+'"> \
      <span>'+this.name+'</span> \
      <span>'+this.description+'</span> \
    </li>';
  return some_html_output;
};

// var cereal = new ShoppingListItem("cereal", "Lucky Charms");
// console.log(cereal.render());
  
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

};

ShoppingListItem.prototype.render = function() {

};
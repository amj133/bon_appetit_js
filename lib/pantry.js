export default class Pantry {
  constructor () {
    this.stock = {}
    this.shoppingList = {}
  }

  stockCheck(item) {
    let quantity = this.stock[item];
    if(quantity === undefined) {
      return 0;
    } else {
      return quantity;
    }
  }

  restock(item, quantity) {
    if(this.stock[item] > 0) {
      this.stock[item] += quantity
    } else {
      this.stock[item] = quantity
    }
    return this.stock
  }

  addToShoppingList(recipe) {
    Object.keys(recipe.ingredients).forEach((ingredient) => {
        if(this.shoppingList[ingredient] > 0) {
          this.shoppingList[ingredient] += recipe.amountRequired(ingredient)
        } else {
          this.shoppingList[ingredient] = recipe.amountRequired(ingredient)
        }
    })
  }
}

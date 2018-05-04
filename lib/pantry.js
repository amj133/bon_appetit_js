export default class Pantry {
  constructor () {
    this.stock = {}
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
    this.stock[item] = quantity
    return this.stock
  }

  // addIngredient (ingredientName, amount) {
  //   return this.ingredients[ingredientName] = amount
  // }
  //
  // ingredientTypes () {
  //   return Object.keys(this.ingredients)
  // }
  //
  // amountRequired (ingredientName) {
  //   return this.ingredients[ingredientName] || 0
  // }
}

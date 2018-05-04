export default class Pantry {
  constructor () {
    this.stock = {}
  }

  addIngredient (ingredientName, amount) {
    return this.ingredients[ingredientName] = amount
  }

  ingredientTypes () {
    return Object.keys(this.ingredients)
  }

  amountRequired (ingredientName) {
    return this.ingredients[ingredientName] || 0
  }
}

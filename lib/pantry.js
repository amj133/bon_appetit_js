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
    if(this.stock[item] > 0) {
      this.stock[item] += quantity
    } else {
      this.stock[item] = quantity
    }
    // this.stock[item] += quantity
    return this.stock
  }
}

import { expect } from "chai"
import Pantry from "../lib/pantry"
import Recipe from "../lib/recipe"

describe("Pantry", () => {
  describe("attributes", () => {
    const pantry = new Pantry()

    it("has a stock", () => {
      expect(pantry.stock).to.deep.equal({})
    })
  })

  describe("#stockCheck method", () => {
    const pantry = new Pantry()

    it("returns quantity of stock", () => {
      expect(pantry.stockCheck("Cheese")).to.equal(0)
    })
  })

  describe("#restock method", () => {
    const pantry = new Pantry()

    it("stocks quantity of item", () => {
      pantry.restock("Cheese", 10)

      expect(pantry.stock).to.deep.equal({"Cheese": 10})
      expect(pantry.stockCheck("Cheese")).to.equal(10)

      pantry.restock("Cheese", 20)

      expect(pantry.stock).to.deep.equal({"Cheese": 30})
      expect(pantry.stockCheck("Cheese")).to.equal(30)
    })
  })

  describe("#addToShoppingList method", () => {
    const pantry = new Pantry()
    const recipe = new Recipe("Cheese Pizza")
    recipe.addIngredient("Cheese", 20)
    recipe.addIngredient("Flour", 20)

    it("adds recipe to shopping list", () => {
      pantry.addToShoppingList(recipe)

      expect(pantry.shoppingList).to.deep.equal({ "Cheese": 20, "Flour": 20 })
    })

    const newRecipe = new Recipe("Spaghetti")
    newRecipe.addIngredient("Noodles", 10)
    newRecipe.addIngredient("Sauce", 10)
    newRecipe.addIngredient("Cheese", 5)


    it("can add ingredients from multiple recipes", () => {
      pantry.addToShoppingList(newRecipe)

      expect(pantry.shoppingList).to.deep.equal({ "Cheese": 25, "Flour": 20, "Noodles": 10, "Sauce": 10 })
    })
  })
})

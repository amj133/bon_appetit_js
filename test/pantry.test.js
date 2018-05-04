import { expect } from "chai"
import Pantry from "../lib/pantry"

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
    })
  })
})

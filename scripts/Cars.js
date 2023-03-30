import { Paints } from "./Paints.js"
import { Orders } from "./Orders.js"
import { CarWheels } from "./Wheels.js"
import { CarInterior } from "./Interiors.js"
import { CarTechnologies } from "./Technologies.js"
import { addCustomOrder } from './database.js'


document.addEventListener('click', (event) => {
  const itemClicked = event.target
  if (itemClicked.id.startsWith('orderButton')) {
    addCustomOrder()
  }
})

export const Cars = () => {
  return `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__paints options--column">
                <h2>Paints</h2>
                ${Paints()}
            </section>
            <section class="choices__interior options--column">
                <h2>Interior</h2>
                ${CarInterior()}
            </section>
        </article>

            <article class="choices">
                <section class="choices__wheels options--column">
                    <h2>Wheels</h2>
                ${CarWheels()}
                </section>
                <section class="choices__technologies options--column">
                    <h2>Technologies</h2>
                ${CarTechnologies()}
                </section>
            </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Order</h2>
            ${Orders()}
        </article>
    `
}
import { getInteriors, getOrders, getPaints, getTechnologies, getWheels } from "./database.js"

const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()
const paints = getPaints()

const buildOrderListItem = (order) => {
  const foundInterior = interiors.find((interior) => {
    return interior.id === order.interiorId
  })
  const foundTechnology = technologies.find((technology) => {
    return technology.id === order.technologyId
  })
  const foundWheel = wheels.find((wheel) => {
    return wheel.id === order.wheelId
  })
  const foundPaint = paints.find((paint) => {
    return paint.id === order.paintId
  })
  const totalCost = foundInterior.price + foundTechnology.price + foundWheel.price + foundPaint.price

  const costString = totalCost.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  return `<li>
${foundPaint.paint} car with ${foundWheel.wheels} wheels, ${foundInterior.interior} interior, and the ${foundTechnology.technology} for a total cost of ${costString}
</li>`
}

export const Orders = () => {

  const orders = getOrders()

  let html = '<ul>'

  const listItems = orders.map(buildOrderListItem)

  html += listItems.join('')
  html += '</ul>'

  return html
}

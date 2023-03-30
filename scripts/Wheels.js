import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

document.addEventListener('change', (event) => {
  if (event.target.id === 'wheel') {
    setWheels(parseInt(event.target.value))
  }
})

export const CarWheels = () => {
  let html =
    '<select id="wheel"> <option value="0">Select interior material...</option>'

  // Use .map() for converting objects to <li> elements
  const listItems = wheels.map((wheel) => {
    return `<option value="${wheel.id}">${wheel.wheels}</option>`
  })

  html += listItems.join('')
  html += '</select>'

  return html
}
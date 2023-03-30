import { getInteriors, setInteriors } from './database.js'

const interiors = getInteriors()

document.addEventListener('change', (event) => {
  if (event.target.id === 'interior') {
    setInteriors(parseInt(event.target.value))
  }
})

export const CarInterior = () => {
  let html =
    '<select id="interior"> <option value="0">Select interier material...</option>'

  // Use .map() for converting objects to <li> elements
  const listItems = interiors.map((interior) => {
    return `<option value="${interior.id}">${interior.interior}</option>`
  })

  html += listItems.join('')
  html += '</select>'

  return html
}

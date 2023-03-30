import { getTechnologies, setTechnologies } from "./database.js";

const technologies = getTechnologies()

document.addEventListener('change', (event) => {
  if (event.target.id === 'technology') {
    setTechnologies(parseInt(event.target.value))
  }
})

export const CarTechnologies = () => {
  let html =
    '<select id="technology"> <option value="0">Select a technology package...</option>'

  // Use .map() for converting objects to <li> elements
  const listItems = technologies.map((technology) => {
    return `<option value="${technology.id}">${technology.technology}</option>`
  })

  html += listItems.join('')
  html += '</select>'

  return html
}
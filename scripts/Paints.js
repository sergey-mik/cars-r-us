import { getPaints, setPaints } from './database.js'

const paints = getPaints()

document.addEventListener('change', (event) => {
  if (event.target.id === 'paint') {
    setPaints(parseInt(event.target.value))
    console.log((event.target.value))
  }
})

export const Paints = () => {
  let html =
    '<select id="paint"> <option value="0">Select paint color...</option>'

  for (const paint of paints) {
    html += `
    <option value="${paint.id}">${paint.paint}</option>
    `
  }

  html += '</select>'
  return html
}

const database = {
  orderBuilder: {},
  paints: [
    { id: 1, paint: 'Silver', price: 500 },
    { id: 2, paint: 'Midnight Blue', price: 400 },
    { id: 3, paint: 'Firebrick Red', price: 300 },
    { id: 4, paint: 'Spring Green', price: 800 },
  ],
  interiors: [
    { id: 1, interior: 'Beige Fabric', price: 405 },
    { id: 2, interior: 'Charcoal Fabric', price: 782 },
    { id: 3, interior: 'White Leather', price: 1470 },
    { id: 4, interior: 'Black Leather', price: 3638 },
  ],
  wheels: [
    { id: 1, wheels: '17-inch Pair Radial', price: 736.4 },
    { id: 2, wheels: '17-inch Pair Radial Black', price: 1258.9 },
    { id: 3, wheels: '18-inch Pair Spoke Silver', price: 795.45 },
    { id: 4, wheels: '18-inch Pair Spoke Black', price: 1241.0 },
  ],
  technologies: [
    { id: 1, technology: 'Basic Package', price: 405 },
    { id: 2, technology: 'Navigation Package', price: 782 },
    { id: 3, technology: 'Visibility Package', price: 1470 },
    { id: 4, technology: 'Ultra Package', price: 3638 },
  ],
  customOrders: [
    {
      id: 1,
      paintId: 3,
      interiorId: 3,
      wheelId: 2,
      technologyId: 1,
      timestamp: 16895837301,
    },
  ],
}

export const getPaints = () => {
  return database.paints.map(( paint) => ({ ...paint }))
}

export const getInteriors = () => {
  return database.interiors.map((interior) => ({ ...interior }))
}

export const getWheels = () => {
  return database.wheels.map((wheel) => ({ ...wheel }))
}

export const getTechnologies = () => {
  return database.technologies.map((technology) => ({ ...technology }))
}

export const getOrders = () => {
  return database.customOrders.map((order) => ({ ...order }))
}

export const setPaints = (id) => {
  database.orderBuilder.paintId = id
}

export const setInteriors = (id) => {
  database.orderBuilder.interiorId = id
}

export const setWheels = (id) => {
  database.orderBuilder.wheelId = id
}

export const setTechnologies = (id) => {
  database.orderBuilder.technologyId = id
}

export const addCustomOrder = () => {
  // Copy the current state of user choices
  const newOrder = { ...database.orderBuilder }

  // Add a new primary key to the object
  const lastIndex = database.customOrders.length - 1
  newOrder.id = database.customOrders[lastIndex].id + 1

  // Add a timestamp to the order
  newOrder.timestamp = Date.now()

  // Add the new order object to custom orders state
  database.customOrders.push(newOrder)

  // Reset the temporary state for user choices
  database.orderBuilder = {}

  // Broadcast a notification that permanent state has changed
  document.dispatchEvent(new CustomEvent('stateChanged'))
}
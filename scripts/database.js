var date = Date.toLocaleString()

/*

    This module contains all of the data, or state, for the
    application. It exports several functions that allow other modules to get copies of the state.

*/

const database = {

    //Array of interior objects
    interiors: [
        {id: 1, interiorOption: 'Beige Fabric', price: 500},
        {id: 2, interiorOption: 'Charcoal Fabric', price: 700},
        {id: 3, interiorOption: 'White Leather', price: 1000},
        {id: 4, interiorOption: 'Black Leather', price: 850}
    ],
    technologies: [
        {id: 1, techOption: 'Basic Package', price: 300},
        {id: 2, techOption: 'Navigation Package', price: 400},
        {id: 3, techOption: 'Visibility Package', price: 500},
        {id: 4, techOption: 'ULTRA Package', price: 950}
    ],
    paintColors: [
        {id: 1, colorOption: 'Silver', price: 400},
        {id: 2, colorOption: 'Midnight Blue', price: 675},
        {id: 3, colorOption: 'Firebrick Red', price: 980},
        {id: 4, colorOption: 'Spring Green', price: 720}
    ],
    wheels: [
        {id: 1, wheelOption: '17-in Pair Radial', price: 110},
        {id: 2, wheelOption: '17-in Pair Radial Black', price: 150},
        {id: 3, wheelOption: '18-in Pair Spoke Silver', price: 130},
        {id: 4, wheelOption: '18-in Pair Spoke Black', price: 210}
    ],
    orders: [
        {
            id: 1,
            interiorId: 1,
            techId: 1,
            paintId: 1,
            wheelId: 1,
            timestamp: 1614659931693
        },
    ],
    orderBuilder: {}
}

/* Exporting var that's a function that returns copies of the database state for other modules */
export const getInterior = () => {
    /* iterates through each object of the interiors array and returns a new array */
    return database.interiors.map(interior => ({...interior}))
}
export const getPaintColor = () => {
    /* iterates through each object of the paintColors array and returns a new array */
    return database.paintColors.map(paintColor => ({...paintColor}))
}
export const getWheel = () => {
    /* iterates through each object of the wheels array and returns a new array */
    return database.wheels.map(wheel => ({...wheel}))
}
export const getTechnology = () => {
    /* iterates through each object of the technologies array and returns a new array */
    return database.technologies.map(technology => ({...technology}))
}
export const getOrder = () => {
    /* iterates through each object of the orders array and returns a new array */
    return database.orders.map(order => ({...order}))
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setPaintColor = (id) => {
    database.orderBuilder.paintId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

//create property techid and setting its value to the argument of the function
export const setTechnology = (id) => {
    database.orderBuilder.techId = id
}

export const addOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.orders.length - 1
    newOrder.id = database.orders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.orders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
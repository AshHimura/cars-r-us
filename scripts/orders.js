//generte HTML for placed Orders

import { getInterior, getPaintColor, getTechnology, getWheel,getOrder } from "./database.js"

const buildOrderListItem = (order) => {

    const interior = getInterior()
    const paintColor = getPaintColor()
    const technology = getTechnology()
    const wheel = getWheel()


// Remember that the function you pass to find() must return true/false
const foundInterior = interior.find(
    (interior) => {
        return interior.id === order.interiorId
    }
)

const foundTechnology = technology.find(
    (technology) => {
        return technology.id === order.techId
}
)

const foundPaintColor = paintColor.find(
    (paintColor) => {
        return paintColor.id === order.paintId
}
)

const foundWheel = wheel.find(
    (wheel) => {
        return wheel.id === order.wheelId
}
)

const totalCost = foundInterior.price + foundTechnology.price + foundWheel.price + foundPaintColor.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

   return `<li>
        Order #${order.id} was placed on ${order.timestamp} & cost a total of ${costString}
    </li>` 
} 



export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */

    //state variable needs to be inside component function so the orders will be re-rendered with freshest data when the html page is refreshed 

    const orders = getOrder()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


//imporing various functions from their respective module
import {addOrder} from "./database.js"
import {Interiors} from "./interior.js"
import {Paint} from "./paintColor.js"
import {Technology} from "./technology.js"
import {Wheels} from "./wheels.js"
import {Orders} from "./orders.js"


document.addEventListener( //adding EventListener to HTML document
    "click", /* case-sensitive string representing the event type for the HTML document to listen for */
    (event) => { //specifies the function to run when the event occurs
        if (event.target.id === "orderButton") { /* if html that matches "orderButton" is clicked, the id is targeted */
            addOrder() //invokes addOrder method from database.js
        }
    }
)

//exports variable that is a function that defines HTML that we wish to display
export const CarsRus = () => {
    //returns html as string
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__interiors options">
                ${Interiors()} 
            </section>
            <section class="choices__paint options">
                ${Paint()}
            </section>
            <section class="choices__technology options">
                ${Technology()}
            </section>
            <section class="choices__wheels options">
                ${Wheels()} 
            </section>
        </article>


        <br>
        <br>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Vehicle Orders</h2>
            ${Orders()}
            </article>
            `
        } //Sidenote - ${method()} is string interpolation of a function, or calling a function to work in the middle of a string... maybe lol
       

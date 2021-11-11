import { CarsRus } from "./CarsRus.js" //imports variable function from its respective module

const mainContainer = document.querySelector("#container")
/* declaring var mainContainer, assigning it the return value of invoking the .querySelector method that searches for html element that has id string of "container" */

const renderAllHTML = () => {
    mainContainer.innerHTML = CarsRus()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
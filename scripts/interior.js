import { getInterior, setInterior } from "./database.js";

const interiors = getInterior()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            setInterior(parseInt(changeEvent.target.value))

        }
    }
)

export const Interiors = () => {
    return `<h2>Interior</h2>
        <select id="interior">
            <option value="0">Please select interior style</option>
            ${interiors.map(     // Use .map() for converting objects to <li> elements
                    (interior) => {
                        return `<option value="${interior.id}">${interior.interiorOption}</option>`
                    }
                ).join("")
            }
        </select>
    `
}
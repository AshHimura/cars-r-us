import { getWheel, setWheel } from "./database.js";

const wheels = getWheel()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheel") {
            setWheel(parseInt(changeEvent.target.value))

        }
    }
)

export const Wheels = () => {
    return `<h2>Wheel</h2>
        <select id="wheel">
            <option value="0">Please select wheel style</option>
            ${
                wheels.map(
                    (wheel) => {
                        return `<option value="${wheel.id}">${wheel.wheelOption}</option>`
                    }
                ).join("")
            }
        </select>
    `
}
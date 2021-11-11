import { getPaintColor, setPaintColor } from "./database.js";

const paintColors = getPaintColor()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paintColor") {
            setPaintColor(parseInt(changeEvent.target.value))

        }
    }
)

export const Paint = () => {
    return `<h2>Paint</h2>
        <select id="paintColor">
            <option value="0">Please select paint job</option>
            ${
                paintColors.map(
                    (paint) => {
                        return `<option value="${paint.id}">${paint.colorOption}</option>`
                    }
                ).join("")
            }
        </select>
    `
}

import { getTechnology, setTechnology } from "./database.js";

const technologies = getTechnology()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technology") {
            setTechnology(parseInt(changeEvent.target.value))

        }
    }
)

export const Technology = () => {
    return `<h2>Technology</h2>
        <select id="technology">
            <option value="0">Please select a tech package</option>
            ${
                technologies.map(
                    (technology) => {
                        return `<option value="${technology.id}">${technology.techOption}</option>`
                    }
                ).join("")
            }
        </select>
    `
}

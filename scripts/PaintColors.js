import { setPaintColor } from "./TransientState.js"

export const PaintColors = async () => {
    // fetch paint colors 
    const response = await fetch("http://localhost:8088/paintColors")
    const paintColors = await response.json()

    // generate html for selections 
    let paintColorsHTML = '<select id="colors">'
        paintColorsHTML += '<option value="0">Select paint color...</option>'

    // use .map to generate new array of strings 
    const paintColorsArray = paintColors.map(
        (color) => {
            return `<option value="${color.id}">${color.color}</option>`
        }
    )

    paintColorsHTML += paintColorsArray.join("")
    
    paintColorsHTML += `</select>`

    return paintColorsHTML
}

export const handlePaintColorChange = (changeEvent) => {
    if (changeEvent.target.id === "colors") {
        setPaintColor(parseInt(changeEvent.target.value))
    }
}
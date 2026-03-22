import { setInterior } from "./TransientState.js"

export const Interiors = async () => {
    // fetch interior option 
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    // generate html for selections 
    let interiorsHTML = '<select id="interiors">'
        interiorsHTML += '<option value="0">Select interior...</option>'

    // use .map to generate new array of strings 
    const interiorsArray = interiors.map(
        (interior) => {
            return `<option value="${interior.id}">${interior.interior}</option>`
        }
    )

    interiorsHTML += interiorsArray.join("")
    
    interiorsHTML += `</select>`

    return interiorsHTML
}

export const handleInteriorChange = (changeEvent) => {
    if (changeEvent.target.id === "interiors") {
        setInterior(parseInt(changeEvent.target.value))
    }
}
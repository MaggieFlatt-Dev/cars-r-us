import { setWheels } from "./TransientState.js"

export const Wheels = async () => {
    // fetch interior option 
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    // generate html for selections 
    let wheelsHTML = '<select id="wheels">'
        wheelsHTML += '<option value="0">Select wheels...</option>'

    // use .map to generate new array of strings 
    const wheelsArray = wheels.map(
        (wheel) => {
            return `<option value="${wheel.id}">${wheel.wheel}</option>`
        }
    )

    wheelsHTML += wheelsArray.join("")
    
    wheelsHTML += `</select>`

    return wheelsHTML
}

export const handleWheelChange = (changeEvent) => {
    if (changeEvent.target.id === "wheels") {
        setWheels(parseInt(changeEvent.target.value))
    }
}
import { setTechnology } from "./TransientState.js"

export const Technology = async () => {
    // fetch interior option 
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    // generate html for selections 
    let technologiesHTML = '<select id="technologies">'
        technologiesHTML += '<option value="0">Select technology...</option>'

    // use .map to generate new array of strings 
    const technologiesArray = technologies.map(
        (technology) => {
            return `<option value="${technology.id}">${technology.technology}</option>`
        }
    )

    technologiesHTML += technologiesArray.join("")
    
    technologiesHTML += `</select>`

    return technologiesHTML
}

export const handleTechnologyChange = (changeEvent) => {
    if (changeEvent.target.id === "technologies") {
        setTechnology(parseInt(changeEvent.target.value))
    }
}
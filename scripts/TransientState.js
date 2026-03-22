// Set up transient state & provide initial values
const transientState = {
    paintColorId: 0,
    interiorId: 0,
    technologyId: 0,
    wheelsId: 0,
    orderDate: null
}

//setter functions to modify each property of transient state

export const setPaintColor = (chosenColor) => {
    transientState.paintColorId = chosenColor
}

export const setInterior = (chosenInterior) => {
    transientState.interiorId = chosenInterior
}

export const setTechnology = (chosenTechnology) => {
    transientState.technologyId = chosenTechnology
}

export const setWheels = (chosenWheels) => {
    transientState.wheelsId = chosenWheels
}

// Place Order Function 
export const placeOrder = async () => {
        //check if all four options have been chosen
    if (transientState.paintColorId === 0 || transientState.interiorId === 0 || transientState.technologyId === 0 || transientState.wheelsId === 0) {
        window.alert("Incomplete Order!")
    } else {
    //if not, window alert "missing information"
    //build POST request
    transientState.orderDate = new Date()
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    //Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions)
   
    //Dispatch a custom event when submission is complete
    const newOrderSubmittedEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(newOrderSubmittedEvent)
    }
}
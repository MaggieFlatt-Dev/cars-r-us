import { placeOrder } from "./TransientState.js"

export const SubmissionButton = () => {
    return `<button id="submission-button">Create Custom Order</button>`
}

export const handleOrderSubmission = (clickEvent) => {
    if (clickEvent.target.id === "submission-button") {
        placeOrder()
    }
}
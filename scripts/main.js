 //Imports
import { PaintColors, handlePaintColorChange } from "./PaintColors.js"
import { Interiors, handleInteriorChange } from "./Interior.js"
import { Technology, handleTechnologyChange } from "./Technology.js"
import { Wheels, handleWheelChange } from "./Wheels.js"
import { SubmissionButton, handleOrderSubmission } from "./SubmitButton.js"
import { OrdersList } from "./OrdersList.js"

 // query selector 
 const mainContainer = document.querySelector("#container")

 //Render 
const render = async () => {
    const paintColorsHTML = await PaintColors()
    const interiorsHTML = await Interiors()
    const technologiesHTML = await Technology()
    const wheelsHTML = await Wheels()
    const submissionButtonHTML = SubmissionButton()
    const ordersHTML = await OrdersList()

//HTML
 const composedHTML = `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paintColor options">
                <h2>Paint Colors</h2>
                ${paintColorsHTML}
            </section>

            <section class="choices__interior options">
                <h2>Interior</h2>
                ${interiorsHTML}
            </section>

            <section class="choices__technology options">
                <h2>Technology</h2>
                ${technologiesHTML}
            </section>

            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${wheelsHTML}
            </section>
        </article>

        <article class="order">
            ${submissionButtonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
                ${ordersHTML}
        </article>
    `

    mainContainer.innerHTML = composedHTML
}

//Event listeners 
document.addEventListener("change", handlePaintColorChange)
document.addEventListener("change", handleInteriorChange)
document.addEventListener("change", handleTechnologyChange)
document.addEventListener("change", handleWheelChange)
document.addEventListener("click", handleOrderSubmission)
document.addEventListener("newOrderCreated", event => {
    render()
})

//final render 
render()
export const OrdersList = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=paintColor&_expand=interior&_expand=technology&_expand=wheels")
    const orders = await response.json()
    console.log(orders)
    
    
    let html = ''
    
    const ordersHTML = orders.map(
        (order) => {
            const orderPrice = order.paintColor.price + order.interior.price + order.technology.price + order.wheels.price
            return `
            <div>${order.paintColor.color} car with ${order.wheels.wheel}, ${order.interior.interior}, and ${order.technology.technology} has a total cost of ${orderPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })}</div>
            `
        }
    )

    html += ordersHTML.join("")

    return html
}
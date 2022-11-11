/* --------------- BACK-END ------------ */
import products from "../data/data"
const getItems = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getSingleItem = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products[7])
        }, 2000)
    })
}

export default getItems
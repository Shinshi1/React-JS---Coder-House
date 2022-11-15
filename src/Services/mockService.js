/* --------------- BACK-END ------------ */
import products from "../data/data"
const getItems = (categoryParam) => {
    return new Promise((resolve) => {
        if (categoryParam === undefined){
            setTimeout(() => {
                resolve(products)
            }, 2000)
        } else {
            let productsRequested = products.filter((product) => {
                return product.category === categoryParam
            })
            setTimeout(() => {
                resolve(productsRequested)
            }, 2000)
        }
    })
}

export const getSingleItem = (idParam) => {
    return new Promise((resolve, reject) => {
        let productRequested = products.find((product) => {
            return product.id === parseInt(idParam)
        })

        if (productRequested === undefined) reject("Producto no encontrado")
        
        setTimeout(() => {
            resolve(productRequested)
        }, 2000)
    })
}

export default getItems
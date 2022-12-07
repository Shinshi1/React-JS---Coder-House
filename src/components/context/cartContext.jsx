import { createContext, useState } from "react";

// 1. importamos e inicializamos el contexto con createContext()
export const cartContext = createContext();

// 2. Creamos nuestro Context Provider - Es un componente al que le voy a indicar todos los componentes que quiero que tengan acceso a ese contexto
export const CartContextProvider = ({ children }) => {
    const saldudoContext = "Hola context!"

    const [cart, setCart] = useState([])
    
    
    const addToCart = (product, count) => {
        //findIndex = guarda la posición en la que se encuentra el objeto
        let itemAlredyInCart = cart.findIndex(itemInCart => itemInCart.id === product.id)

        let newCart = cart.map((item) => item )

        // console.log("--->", itemAlredyInCart)
        
        if (itemAlredyInCart !== -1 ) {
            // console.log('items agregados', count)
            newCart[itemAlredyInCart].count += count;
            setCart(newCart)
        } else {
            product.count = count;
            newCart.push(product)
            setCart(newCart)
        }
    }

    const itemsInCart = () => {
        let total = 0
        cart.forEach((itemInCart) => (total = total + itemInCart.count))
        return total
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (idRemove) => {
        // cart.filter -> Filtrar todos los item con un ID diferente al "idRemove"
        let itemRemove = cart.filter((item) => {
            return item.id !== idRemove
        })
        setCart(itemRemove)
    }

    const priceInItem = (item) => {
        // calcula el precio subtotal
        let res = item
        let subtotal = res.count * res.price
        return subtotal
    }

    const priceInCart = () => {
        let totalPrice = 0
        cart.forEach((Item) => (totalPrice = totalPrice + Item.price * Item.count))
        return totalPrice
    }

    const value = {
        saldudoContext,
        itemsInCart,
        cart,
        addToCart,
        removeItem,
        clear,
        priceInCart,
        priceInItem,
    }
    // 3. retornamos el provider del context creado
    // 4. Pasamos en la prop "value" las variables que queramos hacer visibles
    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}
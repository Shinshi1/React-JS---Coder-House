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

        console.log("--->", itemAlredyInCart)
        
        if (itemAlredyInCart !== -1 ) {
            console.log('items agregados', count)
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
    }

    const priceInCart = () => {
        // let total = 0
        // cart.forEach((priceItem) => (total = total + priceItem.price))
        // return total
    }

    const value = {
        saldudoContext,
        itemsInCart,
        cart,
        addToCart
    }
    // 3. retornamos el provider del context creado
    // 4. Pasamos en la prop "value" las variables que queramos hacer visibles
    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}
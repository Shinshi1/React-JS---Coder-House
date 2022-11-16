import { createContext } from "react";

// 1. importamos e inicializamos el contexto con createContext()
export const cartContext = createContext();
// 2. Creamos nuestro Context Provider - Es un componente al que le voy a indicar todos los componentes que quiero que tengan acceso

export const CartContextProvider = (props) => {
    return (
        <cartContext.Provider>
            {props.children}
        </cartContext.Provider>
    )
}
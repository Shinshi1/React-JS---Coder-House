// 1. Importamos el hook de context: useContext
import React, { useContext } from "react"
// 2. Importamos el context que queramos utilizar
import { cartContext } from "../../context/cartContext"

import './cartwidget.css'
import CartIcon from "./CartIcon"
const CartWidget = () => {
  // 3. Inicializamos el contexto deseado
  const miContext = useContext(cartContext)
  return (
    <>
      <CartIcon />
      <span className="rounded-3xl cart-count">{miContext.itemsInCart()}</span>
    </>
  )
}

export default CartWidget
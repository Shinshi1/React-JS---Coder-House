// 1. Importamos el hook de context: useContext
import React, { useContext } from "react"
// 2. Importamos el context que queramos utilizar
import { cartContext } from "../../context/cartContext"

import './cartwidget.css'
import CartIcon from "./CartIcon"
import { Link } from "react-router-dom"
const CartWidget = () => {
  // 3. Inicializamos el contexto deseado
  const miContext = useContext(cartContext)

  return (
    <>
      <Link to={'/cart'}>
        <CartIcon /> <span className={`rounded-3xl ${miContext.itemsInCart() > 0 ? 'cart-count' : '' }`}>{miContext.itemsInCart() > 0 &&   miContext.itemsInCart()}</span>
      </Link>
    </>
  )
}

export default CartWidget

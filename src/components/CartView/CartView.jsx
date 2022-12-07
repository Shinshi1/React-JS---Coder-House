import React, { useContext } from 'react'
import './cart.css'
import { cartContext } from '../context/cartContext'
import MyButton from '../MyButton/MyButton'
import { Link } from 'react-router-dom'
import { createOrder } from '../../Services/firestore'
import { useNavigate } from "react-router-dom";
import CartForm from './CartForm'
import CartTable from './CartTable'

const CartView = () => {

    const { cart, removeItem, clear, priceInCart, priceInItem } = useContext(cartContext)
    let navigate = useNavigate()

    if (cart.length === 0)
        return (
            <div className='flex flex-col items-center justify-center cartview-container'>
                <h1 className='text-5xl font-bold text-teal-500 ' style={{'textShadow': '#000 1px 0 10px'}}>Carrito Vacio!!</h1>
                <Link to={'/'}><button className='m-auto btn-info'>Ir a comprar</button></Link>
            </div>
        )

    const handleCheckout = async (data) => {
        // Objeto orden de compra
        const order = {
            buyer: data,
            items: cart,
            total: priceInCart(),
            date: new Date(),
        }

        const orderId = await createOrder(order)
        clear()
        //  Redirigir al usuario a /thankyou/:orderId (persistencia)
        navigate(`/reserva/${orderId}`)
    }

    return (
        <div className='flex flex-col items-center justify-center pb-12 cartview-container pt-28'>
            <CartTable cart={cart} priceInItem={priceInItem} removeItem={removeItem} priceInCart={priceInCart} />
            <div className='flex gap-6 my-4'>
                <MyButton onClick={() => clear()} classBtn="btn-cart">Vaciar Carrito</MyButton>
            </div>
            <div className='p-2 rounded form-container'>
                <h3 className='text-lg font-medium font-poppins'>Ingrese sus Datos para finalizar la compra...</h3>
                <CartForm onSubmit={handleCheckout} />
            </div>
        </div>
    )
}

export default CartView
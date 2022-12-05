import React, { useContext } from 'react'
import './cart.css'
import { cartContext } from '../context/cartContext'
import MyButton from '../MyButton/MyButton'
import { Link } from 'react-router-dom'
import CartArrowDownIcon from '../Icons/CartArrowDownIcon'
import { createOrder} from '../../Services/firestore'
import { useNavigate } from "react-router-dom";
import CartForm from './CartForm'

const CartView = () => {

    const { cart, removeItem, clear, priceInCart, priceInItem } = useContext(cartContext)
    let navigate = useNavigate()

    if (cart.length === 0)
        return (
            <div className='flex flex-col items-center justify-center cartview-container'>
                <h1 className='text-3xl font-bold'>Carrito Vacio!!</h1>
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
            <table className="text-center table-fixed table-cart font-poppins">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>SubTotal</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.count}</td>
                            {/* 
                                prodria ser  
                                <td>{item.count * item.price}</td>
                                pero me veo obligado a hacer la función para que también pueda mostrarse en WideItem
                            */}
                            <td>{priceInItem(item)}</td>
                            <td><MyButton color="white" onClick={() => removeItem(item.id)} classBtn="itemcount_btn"><CartArrowDownIcon /></MyButton> </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot className='text-center'>
                    <tr>Total: {priceInCart()}</tr>
                </tfoot>
            </table>
            <div className='flex gap-6 my-4'>
                <MyButton onClick={() => clear()} classBtn="btn-cart">Vaciar Carrito</MyButton>
            </div>
            <CartForm onSubmit={handleCheckout} />
        </div>
    )
}

export default CartView
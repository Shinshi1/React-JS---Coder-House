import React, { useContext } from 'react'
import './cart.css'
import { cartContext } from '../context/cartContext'
import MyButton from '../MyButton/MyButton'
import { Link } from 'react-router-dom'
import CartArrowDownIcon from '../Icons/CartArrowDownIcon'

const CartView = () => {

    const { cart, removeItem, clear, priceInCart } = useContext(cartContext)

    if (cart.length === 0)
        return (
            <div className='flex flex-col items-center justify-center cartview-container'>
                <h1 className='text-3xl font-bold'>Carrito Vacio!!</h1>
                <Link to={'/'}><button className='m-auto btn-info'>Ir a comprar</button></Link>
            </div>
        )

    return (
        <div className='flex flex-col items-center justify-center cartview-container'>
            <table className="text-center table-fixed table-cart">
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
                            <td>{item.price}</td>
                            <td><MyButton color="white" onClick={() => removeItem(item.id)} classBtn="itemcount_btn"><CartArrowDownIcon /></MyButton> </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>Total: {priceInCart()}</tr>
                </tfoot>
            </table>
            <MyButton onClick={() => clear()} classBtn="btn-info">Vaciar Carrito</MyButton>
        </div>
    )
}

export default CartView
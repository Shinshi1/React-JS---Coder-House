import React from 'react'
import CartArrowDownIcon from '../Icons/CartArrowDownIcon'
import MyButton from '../MyButton/MyButton'

const CartTable = ({cart, priceInItem, removeItem, priceInCart}) => {
  return (
    <div>
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
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.count}</td>
              <td>{priceInItem(item)}</td>
              <td><MyButton color="white" onClick={() => removeItem(item.id)} classBtn="itemcount_btn"><CartArrowDownIcon /></MyButton></td>
            </tr>
          ))}
        </tbody>
        <tfoot className='text-center'>
          <tr>
            <td colSpan={5} className="text-2xl font-bold border-solid" >Total: ${priceInCart()}</td>
          </tr>
        </tfoot>
      </table>

    </div>
  )
}

export default CartTable
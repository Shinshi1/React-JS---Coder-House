import React, { useState } from 'react'
import MyButton from '../MyButton/MyButton';
import './itemcount.css'
const ItemCount = ({ stock, onAddToCart }) => {
    let [count, setCount] = useState(1);

    const handleAdd = () => {
        if (count < stock) setCount(count + 1)
    }

    const handleSubstract = () => {
        if (count > 1) setCount(count - 1)
    }



    return (
        <div>
            <div className='itemcount_container'>
                <MyButton onClick={handleSubstract} classBtn="itemcount_btn" >-</MyButton>
                <span>{count}</span>
                <MyButton onClick={handleAdd} classBtn="itemcount_btn" >+</MyButton>
            </div>
            <button onClick={()=> onAddToCart(count)} className='agregar-cart'>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount
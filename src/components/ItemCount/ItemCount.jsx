import React, { useState } from 'react'
import './itemcount.css'
const ItemCount = ({stock, title}) => {
    let [ count, setCount ] = useState(1);

    const sumaCount = () => {
        if (count < stock) setCount(count + 1)
    }

    const restaCount = () => {
        if (count > 1) setCount(count - 1)
    }

    return (
        <div>
            <div className='item-count-container'>         
            <button onClick={sumaCount} className="btn-count" >+</button>
            <span>{count}</span>
            <button onClick={restaCount} className="btn-count" >-</button>
            </div>
            <button className='agregar-cart'>{title}</button>
        </div>
    )
}

export default ItemCount
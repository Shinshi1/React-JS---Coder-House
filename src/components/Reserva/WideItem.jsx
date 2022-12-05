import React, { useContext } from 'react'
import { cartContext } from '../context/cartContext'
import './reserva.css'
const WideItem = ({ item }) => {

  const { priceInItem } = useContext(cartContext)


  return (
    <div className='flex flex-row wideitem-card aling-middle' key={item.id}>
      <div className='wideitem-img'>
        <img src={item.thumbnail} alt={item.title} />
      </div>
      <div className='flex items-center justify-between w-full wideitem-detail px-7'>

        <h4>{item.count} X {item.title}</h4> <span style={{ color: 'rgb(100 200 0)' }}>${priceInItem(item)}</span>
      </div>
    </div>
  )
}

export default WideItem
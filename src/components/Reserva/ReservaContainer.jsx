import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


import { getOrder } from '../../Services/firestore'
import OrderDetail from './OrderDetail'


const Reserva = () => {
  // Crear estado
  const [order, setOrder] = useState([])
  
  const idOrder = useParams().idOrder
  
  // Creamos una Async function
  const getOrderAsync = async () => {
    let res = await getOrder(idOrder)
    setOrder(res)
  }
  console.log('orden en componente reserva', order)

  useEffect(() => {
    getOrderAsync()
  }, [idOrder])
  


  
  return (
    <OrderDetail order={order} />
  )
}

export default Reserva

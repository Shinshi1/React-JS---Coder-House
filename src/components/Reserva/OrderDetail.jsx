import React from 'react'
import WideItem from './WideItem'


import './reserva.css'

const OrderDetail = ({ order }) => {
    return (
        <div className='px-5 pb-12 text-center reserva-container pt-28'>

            <h1 className='text-3xl font-bold'>Gracias por tu compra</h1>
            <h3 className='my-3'>EL id de tu compra es <strong>{order.id}</strong></h3>
            <div className='flex flex-col items-start'>
                <h3 className='mb-5 text-lg font-semibold'>Detalle del pedido</h3>
                <div className='flex flex-col gap-3'>
                    {order.items?.map((item) => {
                        return (
                            <WideItem item={item} key={item.id} />
                        )
                    }
                    )}
                    <div className='flex items-center justify-center wideitem-card' style={{ color: 'rgb(100 200 0)' }}>
                        TOTAL: ${order.total}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail
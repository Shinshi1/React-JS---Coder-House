import { useState, useEffect } from 'react'
import {getSingleItem} from '../../Services/mockService'
import ItemDetail from './ItemDetail'

import { useParams } from 'react-router-dom'
import '../ItemListContainer/ItemList/itemlist.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()
    
    const getItemAsync = async () => {
            let res = await getSingleItem(id)
            setProduct(res)
        }
     
      useEffect(() => {
        getItemAsync()
      }, [])
    
    return (
        <div className='px-5 pt-28 item-list'>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer
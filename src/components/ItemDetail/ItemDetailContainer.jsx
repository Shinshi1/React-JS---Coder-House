import { useState, useEffect } from 'react'
import {getSingleItem} from '../../Services/mockService'
import ItemDetail from './ItemDetail'

import { useParams } from 'react-router-dom'
import '../ItemListContainer/ItemList/itemlist.css'
import Loader from '../Loader/Loader'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()
    
    const getItemAsync = async () => {
            let res = await getSingleItem(id)
            setProduct(res)
            setIsLoading(false)
        }
     
      useEffect(() => {
        getItemAsync()
      }, [])

      // if -> Retorno anticipado / Early return
      if(isLoading)
      return(<Loader />)
    
    return (
        <div className='pt-28 item-list-detail pb-14'>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer
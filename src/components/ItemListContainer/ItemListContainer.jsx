import { useState, useEffect } from 'react'
import ItemList from "./ItemList/ItemList"
import getItems from '../../Services/mockService'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'


const ItemListContainer = () => {

  const [products, setProducts] = useState(null)

  const { id } = useParams()
  // console.log(useParams())

  /*
    useEffect(
      () => {
        getItems(id).then((respuestaDatos) => {
          setProducts(respuestaDatos)
        })
      }, [id])
  
    */


  //  EJEMPLO DE CON ASYNC
  const getItemsAsync = async () => {
    try {
      let respuesta = await getItems(id)
      setProducts(respuesta)

    } catch (errorMsg) {
      console.log(errorMsg)
    }
  }

  useEffect(() => {
    getItemsAsync()
  }, [id])

  return (
    <div className='px-5 pb-12 pt-28'>
      {products ? <ItemList products={products} /> : <Loader />}
    </div>
  )
}

export default ItemListContainer
import { useState, useEffect } from 'react'
import ItemList from "./ItemList/ItemList"
import { getItems, getItemsByCategory } from '../../Services/firestore'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'


const ItemListContainer = () => {

  const [products, setProducts] = useState(null)

  const { idCategory } = useParams()
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
      if (!idCategory) {
        let respuesta = await getItems()
        setProducts(respuesta)
  
      } else {
        let respuesta = await getItemsByCategory(idCategory)
        setProducts(respuesta)
      }

    } catch (errorMsg) {
      console.log(errorMsg)
    }
  }

  useEffect(() => {
    getItemsAsync()
  }, [idCategory])

  return (
    <div className='px-5 pb-12 pt-28'>
      {products ? <ItemList products={products} /> : <Loader />}
    </div>
  )
}

export default ItemListContainer
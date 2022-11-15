import { useState, useEffect } from 'react'
import ItemList from "./ItemList/ItemList"
import getItems from '../../Services/mockService'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

  const [products, setProducts] = useState([])

  const { id } = useParams()
  console.log(useParams())
  
  
/*
  useEffect(
    () => {
      getItems().then((respuestaDatos) => {
        setProducts(respuestaDatos)
      })
    }, [])

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
    <div className='px-5 pt-28'>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
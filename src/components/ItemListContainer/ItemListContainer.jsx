import { useState, useEffect } from 'react'
import ItemList from "./ItemList/ItemList"
import getItems from '../../Services/mockService'


const ItemListContainer = () => {

  const [products, setProducts] = useState([])

  useEffect(
    () => {
      getItems().then((respuestaDatos) => {
        setProducts(respuestaDatos)
      })
    }, [])

 /* 
 EJEMPLO DE CON ASYNC
 const getItemsAsync = async () => {
   try {
     let respuesta = await getItems()
     setProducts(respuesta)

   } catch (errorMsg) {
     console.log(errorMsg)
   }
 }

 useEffect(() => {
   getItemsAsync()
 }, [])
 */

  return (
    <div>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
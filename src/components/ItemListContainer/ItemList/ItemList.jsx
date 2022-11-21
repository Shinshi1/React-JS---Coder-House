import './itemlist.css'
import Item from "./Item/Item"

const ItemList = ({products}) => {
  return (
    <div className="item-list">
      {products.map(( product ) => {
        return (
          <Item product={ product }
            key={product.id}
            // id={id}
            // title={title}
            // price={price}
            // stock={stock}
            // category={category}
            // thumbnail={thumbnail}
          />
        )
      })}
    </div>
  )
}

export default ItemList

import './itemlist.css'
import Item from "./Item/Item"

const ItemList = ({products}) => {
  return (
    <div className="item-list">
      {products.map(({ id, title, price, stock, category, thumbnail}) => {
        return (
          <Item
            key={id}
            title={title}
            price={price}
            stock={stock}
            category={category}
            thumbnail={thumbnail}
          />
        )
      })}
    </div>
  )
}

export default ItemList

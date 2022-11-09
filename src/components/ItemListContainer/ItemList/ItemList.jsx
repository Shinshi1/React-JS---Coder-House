import './itemlist.css'
import Item from "./Item/Item"

const ItemList = ({products}) => {
  return (
    <div className="item-list">
      {products.map(({ id, title, price, stock, category, thumbnail, description }) => {
        return (
          <Item
            key={id}
            title={title}
            price={price}
            stock={stock}
            category={category}
            thumbnail={thumbnail}
            description={description}
          />
        )
      })}
    </div>
  )
}

export default ItemList

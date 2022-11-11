import "./item.css"
import MyButton from "../../../MyButton/MyButton"
import ItemCount from "../../../ItemCount/ItemCount"

const Item = ({id, title, price, stock, category, thumbnail}) => {
  return (
    <div className="card" key={id}>
      <div className="card-img">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="card-detail">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
      <MyButton> Ver más </MyButton>   
      <ItemCount stock={stock} title="Agregar al Carrito" />
    </div>
  )
}

export default Item
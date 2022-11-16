import "./item.css"
import MyButton from "../../../MyButton/MyButton"
import ItemCount from "../../../ItemCount/ItemCount"
import { Link } from "react-router-dom"

const Item = ({id, title, price, stock, category, thumbnail}) => {
  const urlDetail = `/detail/${id}`
  return (
    <div className="card">
      <div className="card-img">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="card-detail">
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
      <Link to={urlDetail}>
      <MyButton classBtn={"mybutton"}>Ver más</MyButton>   
      </Link>
        <ItemCount stock={stock} />
    </div>
  )
}

export default Item
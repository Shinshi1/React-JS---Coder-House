import "./item.css"
import MyButton from "../../../MyButton/MyButton"
import { Link } from "react-router-dom"

const Item = ({product}) => {
  
  
  const urlDetail = `/detail/${product.id}`
  return (
    <div className="card">
      <div className="card-img">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="card-detail">
        <h3 className="font-bold ">{product.title}</h3>
        <h4 style={{color: product.discount && '#85BB65'}}>${product.price}</h4>
        {product.discount && <small>descuento: {product.discount}</small>}
        {product.stock <= 0 && <h4>Sin Stock disponible</h4>}
      </div>
      <Link to={urlDetail}>
        <MyButton classBtn={"mybutton"} color={product.stock <= 0 && "grey"}>Ver más</MyButton>   
      </Link>
    </div>
  )
}

export default Item
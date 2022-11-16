import './itemdetail.css';
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product: { thumbnail, title, description, price, stock } }) => {

  let [addedToCart, setAddedToCart] = useState(false)

  const onAddToCart = (count) => {
    setAddedToCart(count)
  }

  return (
    <div className="card-detail--focus">
      <div className="card-detail_img">
        <img src={thumbnail} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2 className='text-lg font-bold'>{title}</h2>
        <p>{description}</p>
        <h4 className="priceTag">$ {price}</h4>
      </div>
      {addedToCart === false ?
        <ItemCount onAddToCart={onAddToCart} stock={stock} />
        : <div>
            <span> Agregaste {addedToCart} items al Carrito </span>
            <Link to={"/cart"}> Ir a ver el Carrito</Link>
        </div>
      }
    </div>
  );
}

export default ItemDetail;
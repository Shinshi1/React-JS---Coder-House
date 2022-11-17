import './itemdetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { cartContext } from '../context/cartContext';
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {

  const { addToCart } = useContext(cartContext)
  
  let [addedToCart, setAddedToCart] = useState(false)

  const onAddToCart = (count) => {
    setAddedToCart(count)

    addToCart(product, count)
  }

  return (
    <div className="card-detail--focus">
      <div className="card-detail_img">
        <img src={product.thumbnail} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2 className='text-lg font-bold'>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      {/* {addedToCart === false ?
        <ItemCount onAddToCart={onAddToCart} stock={product.stock} />
        : <div>
            <span> Agregaste {addedToCart} items al Carrito </span>
            <Link to={"/cart"}> Ir a ver el Carrito</Link>
        </div>
      } */}
      <ItemCount onAddToCart={onAddToCart} stock={product.stock} />
    </div>
  );
}

export default ItemDetail;
import './itemdetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { cartContext } from '../context/cartContext';
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {

  const { addToCart } = useContext(cartContext)

  let [isInCart, setIsInCart] = useState(false)

  const onAddToCart = (count) => {
    setIsInCart(count)

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
      {
        isInCart ?
          <Link to={"/cart"}> <button className='btn-info'>Ir al Carrito</button></Link>
        : 
        <ItemCount onAddToCart={product.stock > 0 && onAddToCart} stock={product.stock} />
      }
    </div>
  );
}

export default ItemDetail;


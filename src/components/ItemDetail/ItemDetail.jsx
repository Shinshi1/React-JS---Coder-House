const ItemDetail = ({ product: {thumbnail, title, description, price} }) => {
  return (
    <div className="card-detail">
      <div className="card-detail_img">
        <img src={thumbnail} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2>{title}</h2>
        <p>{description}</p>
        <h4 className="priceTag">$ {price}</h4>
      </div>
      {/* <ItemCount stock={product.stock}/> */}
    </div>
  );
}

export default ItemDetail;
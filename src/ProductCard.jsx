import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

import "./ProductCard.css";

function ProductCard({ item }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log("Adding item to cart:", item);
    dispatch(addItem({ id: item.id, product: item }));
  };

  const isInCart = useSelector((state) =>
    state.cart.items.some((i) => i.id === item.id),
  );

  return (
    <div className="product-item">
      <h3>{item.name}</h3>
      <div className="product-image">
        <img src={item.imageurl} alt={item.name} />
      </div>
      <p className="product-price">£{item.price}</p>
      <p className="product-description">{item.description}</p>
      <button disabled={isInCart} onClick={handleAddToCart}>
        {isInCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;

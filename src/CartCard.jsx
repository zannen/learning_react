import "./CartCard.css";
import { useDispatch } from "react-redux";
import { addItem, removeItem, removeAllItem } from "./CartSlice";

function CartCard({ item }) {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem({ id: item.id, product: item.product }));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem({ id: item.id }));
  };

  const handleRemoveAllItem = () => {
    dispatch(removeAllItem({ id: item.id, product: item.product }));
  };

  return (
    <div className="cart-item">
      <img
        src={item.product.imageurl}
        alt={item.product.name}
        className="cart-item-image"
      />
      <div className="cart-item-details">
        <h3>{item.product.name}</h3>
        <p>£{item.product.price}</p>
        <p>
          <button onClick={handleRemoveItem}>-</button> {item.quantity}{" "}
          <button onClick={handleAddItem}>+</button>
        </p>
        <p>Total: £{item.product.price * item.quantity}</p>
        <p>
          <button className="delete-button" onClick={handleRemoveAllItem}>
            Delete
          </button>
        </p>
      </div>
    </div>
  );
}

export default CartCard;

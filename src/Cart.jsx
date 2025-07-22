import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import CartCard from "./CartCard";

import "./Cart.css";

function Cart() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const totalCartAmount = useSelector((state) => state.cart.totalPrice);
  const handleContinueShopping = (e) => {
    e.preventDefault();
    navigate("/products/");
  };

  return (
    <div>
      <Header pagetitle="Cart" />
      <p>Total Cart Amount: £{totalCartAmount}</p>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-listing">
          <CartCard item={item} />
        </div>
      ))}
      <div className="cart-buttons">
        <button onClick={handleContinueShopping}>Continue Shopping</button>
      </div>
      <div className="cart-buttons">
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;

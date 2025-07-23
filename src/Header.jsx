import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Header.css";

function Header({ pagetitle }) {
  const navigate = useNavigate();

  const handleNavLandingPage = (event) => {
    event.preventDefault();
    navigate("/learning_react/");
  };

  const handleNavCart = (event) => {
    event.preventDefault();
    navigate("/learning_react/cart/");
  };

  const handleNavProducts = (event) => {
    event.preventDefault();
    navigate("/learning_react/products/");
  };

  const isProductsPage = pagetitle === "Plants";
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="header-bar">
      <div className="header-left">
        <img
          src="../logo.png"
          alt="Logo"
          className="logo"
          onClick={handleNavLandingPage}
        />
        <div className="header-title-group" onClick={handleNavLandingPage}>
          <span className="header-title">Paradise Nursery</span>
          <span className="header-subtitle">For all your plant needs</span>
        </div>
        <div
          style={{ display: isProductsPage ? "none" : "block" }}
          className="to-products"
          onClick={handleNavProducts}
        >
          Products
        </div>
      </div>
      <div className="header-center">
        <span className="page-title">{pagetitle}</span>
      </div>
      <div className="header-right" onClick={handleNavCart}>
        <span className="cart-quantity">{totalQuantity}</span>
        <img src="../trolley.png" alt="Cart" className="cart-icon" />
      </div>
    </div>
  );
}

export default Header;

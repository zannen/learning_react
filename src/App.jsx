import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import Cart from "./Cart";
import LandingPage from "./LandingPage";
import ProductListing from "./ProductListing";
import NotFound from "./NotFound";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/learning_react/" element={<LandingPage />} />
          <Route
            path="/learning_react/products/"
            element={<ProductListing />}
          />
          <Route path="/learning_react/cart/" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

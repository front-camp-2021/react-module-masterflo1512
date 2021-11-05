import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import rootReducer from "./reducers";
import App from "./App";
import { Favorites } from "./components/favorites/Favorites";
import { Cart } from "./components/cart/Cart";
import "./index.scss";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/store" element={<App />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route render={() => <Navigate to="about-us" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

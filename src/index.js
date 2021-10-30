import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { composeWithDevTools } from 'redux-devtools-extension';
import App from "./App";
import { Favorites } from "./components/favorites/Favorites";
import { Cart } from "./components/cart/Cart";
import "./index.scss";



const store = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <Switch>
          <Route path="/store" component={App} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/cart" component={Cart} />

          <Redirect to="/store" />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode >,

  document.getElementById("root")
);

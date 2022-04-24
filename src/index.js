import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/Context";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UseContext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-ylkpd9u8.us.auth0.com"
      clientId="qtlwPvbtvoI9cNaYnBK8PzJ1NgywtgR3"
      redirectUri={window.location.origin}
    >
      <UserProvider>
        <AppProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AppProvider>
      </UserProvider>
    </Auth0Provider>
  </BrowserRouter>
);

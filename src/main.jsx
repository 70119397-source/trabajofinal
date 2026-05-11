import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import { OrdersProvider } from "./context/OrdersContext";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(

  <ThemeProvider>

    <OrdersProvider>

      <CartProvider>

        <Toaster position="top-right" />

        <App />

      </CartProvider>

    </OrdersProvider>

  </ThemeProvider>

);
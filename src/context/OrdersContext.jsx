import { createContext, useEffect, useState } from "react";

export const OrdersContext = createContext();

export function OrdersProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order) => {
    const finalOrder = {
      ...order,
      id: Date.now(), 
      status: 'Pendiente' 
    };
    setOrders(prev => [...prev, finalOrder]);
  };

  const deleteOrder = (id) => {
    setOrders(prev => prev.filter(order => order.id !== id));
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        addOrder,
        deleteOrder 
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}
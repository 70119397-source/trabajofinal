import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { OrdersContext } from "../context/OrdersContext";

export default function CheckoutModal({ isOpen, onClose }) {

  const { cart, total, clearCart } = useContext(CartContext); 
  const { addOrder } = useContext(OrdersContext);

  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [phone, setPhone] = useState("");
  const [district, setDistrict] = useState("Cusco Centro");
  const [reference, setReference] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      customer,
      phone,      
      district,   
      address,
      reference,  
      total,
      items: cart,
      date: new Date().toLocaleString()
    };

    addOrder(newOrder);

    clearCart(); 

    alert(`¡Pedido realizado con éxito, ${customer}!`);
    
    onClose(); 
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-100 p-4 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-3xl w-full max-w-2xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto border border-gray-100 dark:border-gray-800">
        
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold dark:text-white">Finalizar Pedido</h2>
          <button onClick={onClose} className="text-2xl dark:text-white hover:text-red-500 transition-colors">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Secciones de inputs (mantén los que ya tenías) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 dark:text-white">
            <input type="text" placeholder="Nombre completo" value={customer} onChange={(e) => setCustomer(e.target.value)} required className="p-4 rounded-2xl border dark:bg-gray-800 dark:border-gray-700 outline-none focus:ring-2 focus:ring-green-500" />
            <input type="tel" placeholder="Celular" value={phone} onChange={(e) => setPhone(e.target.value)} required className="p-4 rounded-2xl border dark:bg-gray-800 dark:border-gray-700 outline-none focus:ring-2 focus:ring-green-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select value={district} onChange={(e) => setDistrict(e.target.value)} className="p-4 rounded-2xl border dark:bg-gray-800 dark:text-white dark:border-gray-700 outline-none focus:ring-2 focus:ring-green-500">
              <option>Cusco Centro</option>
              <option>Wanchaq</option>
              <option>San Sebastián</option>
              <option>San Jerónimo</option>
              <option>Santiago</option>
            </select>
            <input type="text" placeholder="Dirección exacta" value={address} onChange={(e) => setAddress(e.target.value)} required className="p-4 rounded-2xl border dark:bg-gray-800 dark:text-white dark:border-gray-700 outline-none focus:ring-2 focus:ring-green-500" />
          </div>

          <input type="text" placeholder="Referencia" value={reference} onChange={(e) => setReference(e.target.value)} className="p-4 rounded-2xl border dark:bg-gray-800 dark:text-white dark:border-gray-700 outline-none" />

          <hr className="border-gray-200 dark:border-gray-700 my-2" />

          {/* Datos de tarjeta */}
          <input type="text" placeholder="Número de tarjeta" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required className="p-4 rounded-2xl border dark:bg-gray-800 dark:text-white dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500" />

          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="MM/YY" value={expiry} onChange={(e) => setExpiry(e.target.value)} required className="p-4 rounded-2xl border dark:bg-gray-800 dark:text-white dark:border-gray-700 outline-none" />
            <input type="text" placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value)} required className="p-4 rounded-2xl border dark:bg-gray-800 dark:text-white dark:border-gray-700 outline-none" />
          </div>

          <div className="flex justify-between items-center mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <h3 className="text-xl font-bold dark:text-white">Total</h3>
            <p className="text-3xl font-bold text-green-500">S/ {total.toFixed(2)}</p>
          </div>

          <button type="submit" className="mt-4 bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl text-xl font-bold transition-all shadow-lg active:scale-95">
            Pagar y Pedir
          </button>
        </form>
      </div>
    </div>
  );
}
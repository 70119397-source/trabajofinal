import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CheckoutModal from "../components/CheckoutModal";

export default function Cart() {
  const { cart, total, removeFromCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Tu carrito está vacío</h2>
        <p className="text-gray-500 mb-6">¡Agrega algo rico para empezar!</p>
        <a href="/" className="bg-blue-500 text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:bg-blue-600 transition-all">
          Ver Menú
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 animate-fadeIn">
      <h1 className="text-4xl font-extrabold mb-8 dark:text-white">Carrito</h1>

      <div className="grid grid-cols-1 gap-6">
        {cart.map((item) => (
          <div key={item.idMeal} className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 gap-6">
            <img 
              src={item.strMealThumb} 
              alt={item.strMeal} 
              className="w-32 h-32 object-cover rounded-2xl shadow-md"
            />
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold dark:text-white">{item.strMeal}</h2>
              <p className="text-gray-500 dark:text-gray-400">Precio: S/ {item.price}</p>
              <p className="text-gray-500">Cantidad: {item.quantity}</p>
              <p className="text-green-500 font-bold text-xl mt-2">Subtotal: S/ {(item.price * item.quantity).toFixed(2)}</p>
            </div>

            <button 
              onClick={() => removeFromCart(item.idMeal)}
              className="bg-red-100 text-red-600 px-6 py-2 rounded-xl font-bold hover:bg-red-200 transition-colors"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border-t-4 border-green-500">
        <div className="flex justify-between items-center mb-6">
          <span className="text-2xl font-bold dark:text-white">Total</span>
          <span className="text-4xl font-black text-green-500">S/ {total.toFixed(2)}</span>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-5 rounded-2xl text-2xl font-bold shadow-lg transition-transform active:scale-95"
        >
          Finalizar compra
        </button>
      </div>

      <CheckoutModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
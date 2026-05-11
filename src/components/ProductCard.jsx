import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ meal }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 relative hover:shadow-lg transition-all group">
      <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-[10px] font-bold px-2 py-1 rounded-md shadow-sm z-10">
        S/ 25.90
      </span>
      
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={meal.strMealThumb} 
          alt={meal.strMeal} 
          
          loading="lazy" 
       
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-800 dark:text-white text-sm leading-tight h-10 line-clamp-2">
          {meal.strMeal}
        </h3>
        
        <button 
          onClick={() => addToCart(meal)}
          className="mt-3 w-full bg-blue-600 text-white py-2.5 rounded-xl text-xs font-bold hover:bg-blue-700 active:scale-95 transition-all"
        >
          Agregar al pedido
        </button>
      </div>
    </div>
  );
};
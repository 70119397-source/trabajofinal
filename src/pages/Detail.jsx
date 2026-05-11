import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api/mealsApi"; // Necesitarás crear esta función en tu API

export default function Detail() {
  const { id } = useParams(); // Captura el ID de la URL
  const navigate = useNavigate();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getMealById(id).then((data) => {
        setMeal(data);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) return <div className="p-20 text-center font-bold">Cargando detalles...</div>;

  return (
    <div className="p-10 lg:p-20 bg-white dark:bg-gray-950 min-h-screen">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-8 bg-gray-200 dark:bg-gray-800 px-6 py-2 rounded-xl font-bold"
      >
        ← Volver
      </button>

      {meal && (

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

    <div className="relative">
      <img 
        src={meal.strMealThumb} 
        alt={meal.strMeal} 
        className="rounded-[3rem] shadow-2xl sticky top-10" 
      />
      <span className="absolute top-6 right-6 bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg">
        {meal.strCategory}
      </span>
    </div>

    <div>
      <h1 className="text-5xl font-black mb-6 dark:text-white uppercase leading-tight">
        {meal.strMeal}
      </h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 dark:text-blue-400">Ingredientes</h2>
        <ul className="grid grid-cols-2 gap-2">

          {Array.from({ length: 20 }).map((_, i) => {
            const ingredient = meal[`strIngredient${i + 1}`];
            const measure = meal[`strMeasure${i + 1}`];
            return ingredient ? (
              <li key={i} className="text-gray-700 dark:text-gray-300 flex gap-2 text-sm">
                <span className="font-bold text-blue-500">•</span> {measure} {ingredient}
              </li>
            ) : null;
          })}
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-4 dark:text-blue-400">Preparación</h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg whitespace-pre-line">
        {meal.strInstructions}
      </p>
    </div>
  </div>
)}
     
    </div>
  );
}
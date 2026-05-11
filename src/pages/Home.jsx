import { useEffect, useState } from "react";
import { getCategories } from "../api/mealsApi";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import LocationMap from '../components/LocationMap';

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <div className="flex w-full min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar categories={categories} />

      <main className="flex-1 p-4 md:p-8">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden bg-linear-to-r from-blue-600 to-blue-400 rounded-3xl p-8 md:p-16 text-white shadow-2xl"
        >
          <div className="relative z-10">
            <h1 className="text-4xl md:text-7xl font-bold mb-4 leading-tight">
              🍕 Pide tus comidas favoritas
            </h1>
            <p className="text-lg md:text-2xl opacity-90">
              Delivery rápido y moderno
            </p>
          </div>

          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute right-20 top-0 w-32 h-32 bg-blue-300/20 rounded-full blur-xl animate-pulse"></div>
        </motion.div>

        <div className="mt-10 p-4">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Bienvenido a ChavelitasFood Delivery
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-xl max-w-2xl">
            Selecciona una categoría desde el menú lateral para ver nuestra variedad de comidas.
          </p>
        </div>

<section className="mt-16 bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 dark:border-gray-800">
  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
    <div>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
        Nuestra Ubicación
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">
        📍 Estamos en el corazón de Cusco. ¡Repartimos a toda la ciudad!
      </p>
    </div>
    <div className="hidden md:block">
      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold animate-pulse">
        ● Zona de cobertura activa
      </span>
    </div>
  </div>
  

  <div className="rounded-2xl overflow-hidden border-2 border-gray-50 dark:border-gray-800 shadow-lg">
    <LocationMap />
  </div>
</section>
      </main>
    </div>
  );
}
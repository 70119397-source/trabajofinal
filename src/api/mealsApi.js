import axios from 'axios';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/';

// Función para obtener categorías 
export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}categories.php`);
    return response.data.categories;
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    return [];
  }
};

// Función para obtener platos por categoría 
export const getMealsByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_URL}filter.php?c=${category}`);
    return response.data.meals;
  } catch (error) {
    console.error("Error al obtener platos:", error);
    return [];
  }
};

export const getMealById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}lookup.php?i=${id}`);
    
    return response.data.meals ? response.data.meals[0] : null;
  } catch (error) {
    console.error("Error al obtener detalle del plato:", error);
    throw error; 
  }
};
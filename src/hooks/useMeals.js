import { useState, useEffect } from "react";
import { getMealsByCategory } from "../api/mealsApi";

export const useMeals = (category) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getMealsByCategory(category)
      .then(res => setData(res))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [category]);

  return { data, loading, error };
};
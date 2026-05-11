import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const savedToken = localStorage.getItem("user_token");
    if (savedToken) {

      setUser({ token: savedToken });
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    setError(null);
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username, 
          password: password
        })
      });

      const data = await response.json();

      if (data.token) {
        setUser({ username, token: data.token });
        localStorage.setItem("user_token", data.token);
        return true; 
      } else {
        throw new Error("Credenciales inválidas");
      }
    } catch (err) {
      setError("Usuario o contraseña incorrectos");
      return false; 
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
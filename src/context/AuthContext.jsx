import { createContext, useState, useContext } from "react";

// Crear el contexto
export const AuthContext = createContext();

// Hook para usar el contexto fácilmente
export const useAuth = () => useContext(AuthContext);

// Provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // user: { id_rest, nombre_rest, ... }

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const loadUserFromStorage = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loadUserFromStorage }}>
      {children}
    </AuthContext.Provider>
  );
}

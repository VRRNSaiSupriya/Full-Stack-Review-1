// src/context/AuthContext.jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Dummy users database
  const users = [
    {
      username: "student1",
      email: "student@gmail.com",
      password: "1234",
      role: "student",
      name: "Sai Student",
    },
    {
      username: "teacher1",
      email: "teacher@gmail.com",
      password: "1234",
      role: "teacher",
      name: "Ravi Teacher",
    },
  ];

  const login = (identifier, password) => {
    const foundUser = users.find(
      (u) =>
        (u.username === identifier || u.email === identifier) &&
        u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      return foundUser.role;
    }

    return null;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
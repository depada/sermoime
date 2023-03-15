import React from "react";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { Account, Home, Login } from "./pages";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/account" element={<Account />}></Route>
      </Routes>
    </AuthContextProvider>
  );
};

export default App;

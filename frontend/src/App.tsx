
import React, { ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Orientacoes from "./pages/orientacoes";
import Refeicoes from "./pages/refeicoes";
import Suplementacoes from "./pages/Suplementacoes";
import ConsumoAgua from "./pages/ConsumoAgua";
import Usuarios from "./pages/Usuarios";

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = localStorage.getItem("accessToken");
  return token ? <>{children}</> : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Rota de Login */}
        <Route path="/login" element={<Login />} />

        {/* Rota principal (Dashboard) */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Rota para Orientações */}
        <Route
          path="/orientacoes"
          element={
            <PrivateRoute>
              <Orientacoes />
            </PrivateRoute>
          }
        />

        {/* Rota para Refeições */}
        <Route
          path="/refeicoes"
          element={
            <PrivateRoute>
              <Refeicoes />
            </PrivateRoute>
          }
        />

        {/* Rota para Suplementações */}
        <Route
          path="/suplementacoes"
          element={
            <PrivateRoute>
              <Suplementacoes />
            </PrivateRoute>
          }
        />

        {/* Rota para Consumo de Água */}
        <Route
          path="/consumo-agua"
          element={
            <PrivateRoute>
              <ConsumoAgua />
            </PrivateRoute>
          }
        />

        {/* Rota para Usuários */}
        <Route
          path="/usuarios"
          element={
            <PrivateRoute>
              <Usuarios />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;


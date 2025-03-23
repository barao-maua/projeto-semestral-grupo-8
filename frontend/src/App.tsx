

import React, { ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/login";
import Refeicoes from "./pages/refeicoes"; 
import Orientacoes from "./pages/orientacoes";
import Suplementacoes from "./pages/Suplementacoes";
import ConsumoAgua from "./pages/ConsumoAgua";
// import Dashboard from "./pages/Dashboard"; // Comentado para não  usar (foi teste)

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

        {/* Rota principal: agora aponta para Refeicoes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Refeicoes />
            </PrivateRoute>
          }
        />

        {/* rota teste do dashboard, ex.: /dashboard
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> */}

        {/* Outras rotas protegidas */}
        <Route
          path="/orientacoes"
          element={
            <PrivateRoute>
              <Orientacoes />
            </PrivateRoute>
          }
        />
        <Route
          path="/suplementacoes"
          element={
            <PrivateRoute>
              <Suplementacoes />
            </PrivateRoute>
          }
        />
        <Route
          path="/consumo-agua"
          element={
            <PrivateRoute>
              <ConsumoAgua />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

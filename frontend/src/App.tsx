
import React, { ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/login";
import Refeicoes from "./pages/Refeicoes";
import Orientacoes from "./pages/Orientacoes";
import Suplementacoes from "./pages/Suplementacoes";
import ConsumoAgua from "./pages/ConsumoAgua";
import Sobre from "./pages/Sobre";

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

        {/* Rota principal ("/") -> Refeicoes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Refeicoes />
            </PrivateRoute>
          }
        />

        {/* Rota para /refeicoes -> Refeicoes */}
        <Route
          path="/refeicoes"
          element={
            <PrivateRoute>
              <Refeicoes />
            </PrivateRoute>
          }
        />

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

        {/* Rota para a página Sobre */}
        <Route
          path="/sobre"
          element={
            <PrivateRoute>
              <Sobre />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

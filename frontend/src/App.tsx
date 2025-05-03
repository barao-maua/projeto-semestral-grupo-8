import React, { ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Páginas
import Login from "./pages/login";
import Refeicoes from "./pages/Refeicoes";
import FormRefeicao from "./pages/FormRefeicao";
import Orientacoes from "./pages/Orientacoes";
import Suplementacoes from "./pages/Suplementacoes";
import ConsumoAgua from "./pages/ConsumoAgua";
import Sobre from "./pages/Sobre";

// Componente para proteger rotas privadas
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
        {/* Rota pública de login */}
        <Route path="/login" element={<Login />} />

        {/* Rotas privadas */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Refeicoes />
            </PrivateRoute>
          }
        />
        <Route
          path="/refeicoes"
          element={
            <PrivateRoute>
              <Refeicoes />
            </PrivateRoute>
          }
        />
        <Route
          path="/nova-refeicao"
          element={
            <PrivateRoute>
              <FormRefeicao />
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

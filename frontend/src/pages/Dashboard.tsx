// frontend/src/pages/Dashboard.tsx
import React, { useEffect, useState } from "react";
import { fetchRefeicoes, Refeicao } from "../services/refeicoes";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const [refeicoes, setRefeicoes] = useState<Refeicao[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchRefeicoes();
        setRefeicoes(data);
      } catch (err: unknown) {
        // Verifica se 'err' é uma instância de Error
        if (err instanceof Error) {
          console.error("Erro ao carregar refeições:", err.message);
          setError(err.message);
        } else {
          // Se não for Error, trate como desejar
          console.error("Erro desconhecido ao carregar refeições:", err);
          setError("Erro desconhecido ao carregar refeições");
        }
      }
    };

    loadData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Bem-vindo! Aqui estão as refeições cadastradas:</p>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {refeicoes.length > 0 ? (
          refeicoes.map((item) => (
            <li key={item.id}>{item.nome}</li>
          ))
        ) : (
          <p>Nenhuma refeição encontrada.</p>
        )}
      </ul>
    </div>
  );
};

export default Dashboard;


import React, { useEffect, useState } from "react";
import { fetchConsumoAgua, ConsumoAgua } from "../services/consumoAgua";

const ConsumoAguaPage: React.FC = () => {
  const [consumos, setConsumos] = useState<ConsumoAgua[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchConsumoAgua();
        setConsumos(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erro desconhecido ao buscar consumo de água.");
        }
      }
    };

    loadData();
  }, []);

  return (
    <div>
      <h2>Consumo de Água</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {consumos.length > 0 ? (
          consumos.map((item) => (
            <li key={item.id}>
              Quantidade: {item.quantidade} ml | Data: {item.data}
            </li>
          ))
        ) : (
          <p>Nenhum registro de consumo de água encontrado.</p>
        )}
      </ul>
    </div>
  );
};

export default ConsumoAguaPage;


import React, { useEffect, useState } from "react";
import { fetchUsuarios, Usuario } from "../services/usuarios";

const Usuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchUsuarios();
        setUsuarios(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Erro desconhecido ao buscar usuários.");
        }
      }
    };
    loadData();
  }, []);

  return (
    <div>
      <h2>Usuários</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {usuarios.length > 0 ? (
          usuarios.map((item) => <li key={item.id}>{item.username}</li>)
        ) : (
          <p>Nenhum usuário encontrado.</p>
        )}
      </ul>
    </div>
  );
};

export default Usuarios;

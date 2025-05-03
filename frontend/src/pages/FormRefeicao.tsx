import { useEffect, useState } from "react";
import { criarRefeicao } from "../services/api";
import api from "../services/api";

interface TipoRefeicao {
  id: number;
  nome: string;
}

interface Usuario {
  id: number;
  email: string;
}

export default function FormRefeicao() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [tipos, setTipos] = useState<TipoRefeicao[]>([]);
  const [usuario, setUsuario] = useState("");
  const [tipoRefeicao, setTipoRefeicao] = useState("");
  const [horario, setHorario] = useState("");
  const [descricao, setDescricao] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const usuariosRes = await api.get<Usuario[]>("/usuarios/");
        const tiposRes = await api.get<TipoRefeicao[]>("/tipos-refeicao/");
        setUsuarios(usuariosRes.data);
        setTipos(tiposRes.data);
      } catch (err) {
        console.error("Erro ao buscar usuários ou tipos:", err);
      }
    };
    fetchDados();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await criarRefeicao({
        usuario: Number(usuario),
        tipo_refeicao: Number(tipoRefeicao),
        horario,
        descricao,
      });
      setMensagem("✅ Refeição criada com sucesso!");
      setUsuario("");
      setTipoRefeicao("");
      setHorario("");
      setDescricao("");
    } catch (err) {
      console.error(err);
      setMensagem("❌ Erro ao criar refeição.");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Cadastrar Nova Refeição</h2>
      {mensagem && <p>{mensagem}</p>}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label>Usuário:</label>
        <select value={usuario} onChange={(e) => setUsuario(e.target.value)} required>
          <option value="">Selecione um usuário</option>
          {usuarios.map((u) => (
            <option key={u.id} value={u.id}>
              {u.email}
            </option>
          ))}
        </select>

        <label>Tipo de Refeição:</label>
        <select value={tipoRefeicao} onChange={(e) => setTipoRefeicao(e.target.value)} required>
          <option value="">Selecione o tipo</option>
          {tipos.map((t) => (
            <option key={t.id} value={t.id}>
              {t.nome}
            </option>
          ))}
        </select>

        <label>Horário:</label>
        <input type="time" value={horario} onChange={(e) => setHorario(e.target.value)} required />

        <label>Descrição:</label>
        <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} required />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

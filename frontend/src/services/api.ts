import axios from "axios";

const API_URL = "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_URL,
});

// Define o token JWT no header
export const setAuthToken = (token: string) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// 🟢 Aplica o token salvo automaticamente, se existir
const savedToken = localStorage.getItem("token");
if (savedToken) {
  setAuthToken(savedToken);
}

// Requisições disponíveis
export const criarRefeicao = async (data: {
  usuario: number;
  tipo_refeicao: number;
  horario: string;
  descricao: string;
}) => {
  const response = await api.post("/refeicoes/", data);
  return response.data;
};

export const fetchRefeicoes = async () => {
  const response = await api.get("/refeicoes/");
  return response.data;
};

export const fetchOrientacoes = async () => {
  const response = await api.get("/orientacoes/");
  return response.data;
};

export const fetchSuplementacoes = async () => {
  const response = await api.get("/suplementacoes/");
  return response.data;
};

export const fetchConsumoAgua = async () => {
  const response = await api.get("/consumo-agua/");
  return response.data;
};

export default api;

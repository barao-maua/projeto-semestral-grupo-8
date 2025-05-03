import axios from "axios";

const API_URL = "http://localhost:8000/api"; 

const api = axios.create({
  baseURL: API_URL,
});

export const setAuthToken = (token: string) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export const criarRefeicao = async (data: {
  usuario: number;
  tipo_refeicao: number;
  horario: string;
  descricao: string;
}) => {
  const response = await api.post("/refeicoes/", data);
  return response.data;
};

export default api;

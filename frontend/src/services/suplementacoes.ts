

export interface Suplementacao {
    id: number;
    nome: string;
    
  }
  
  export async function fetchSuplementacoes(): Promise<Suplementacao[]> {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      throw new Error("Token não encontrado. Faça o login novamente.");
    }
  
    const response = await fetch("http://localhost:8000/api/suplementacoes/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
  
    if (!response.ok) {
      throw new Error("Erro ao buscar suplementações");
    }
  
    return response.json();
  }
  
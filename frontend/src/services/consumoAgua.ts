// frontend/src/services/consumoAgua.ts

export interface ConsumoAgua {
    id: number;
    quantidade: number; 
    data: string; 
    // Adicione outros campos conforme sua modelagem (horário, observações, etc.)
  }
  
  export async function fetchConsumoAgua(): Promise<ConsumoAgua[]> {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      throw new Error("Token não encontrado. Faça o login novamente.");
    }
  
    const response = await fetch("http://localhost:8000/api/consumo-agua/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
  
    if (!response.ok) {
      throw new Error("Erro ao buscar consumo de água");
    }
  
    return response.json();
  }
  
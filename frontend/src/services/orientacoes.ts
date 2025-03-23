// Defina a interface que reflete os dados retornados pelo backend
export interface Orientacao {
    id: number;
    titulo: string;
    // adicione outros campos conforme sua modelagem no backend
  }
  
  // Função para buscar as orientações do endpoint protegido
  export async function fetchOrientacoes(): Promise<Orientacao[]> {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      throw new Error("Token não encontrado. Faça o login novamente.");
    }
  
    const response = await fetch("http://localhost:8000/api/orientacoes/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer " + token`
      }
    });
  
    if (!response.ok) {
      throw new Error("Erro ao buscar orientações");
    }
  
    return response.json();
  }
  
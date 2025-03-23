
export interface Refeicao {
    id: number;
    nome: string;
    // acrescente outros campos conforme a sua modelagem
  }
  
  // Função que faz a requisição ao endpoint usando o token JWT
  export async function fetchRefeicoes(): Promise<Refeicao[]> {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      throw new Error("Token não encontrado. Faça o login novamente.");
    }
  
    const response = await fetch("http://localhost:8000/api/refeicoes/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      throw new Error("Erro ao buscar refeições");
    }
  
    // Retorna o JSON tipado como Refeicao[]
    return response.json();
  }
  
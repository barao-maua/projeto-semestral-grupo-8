
export interface Usuario {
    id: number;
    username: string;
    email: string;
    // ...outros campos que o backend retornar
  }
  
  export async function fetchUsuarios(): Promise<Usuario[]> {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      throw new Error("Token não encontrado. Faça o login novamente.");
    }
    const response = await fetch("http://localhost:8000/api/usuarios/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error("Erro ao buscar usuários");
    }
    return response.json();
  }
  
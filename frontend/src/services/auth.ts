
// frontend/src/services/auth.ts
export async function login(username: string, password: string): Promise<void> {
    try {
      const response = await fetch("http://localhost:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });
      if (!response.ok) {
        throw new Error("Erro no login. Verifique suas credenciais.");
      }
      const data = await response.json();
      // Salva os tokens no localStorage
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);
      // Redireciona para a Dashboard
      window.location.href = "/";
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      alert("Erro ao realizar login. Tente novamente.");
    }
  }
  
  
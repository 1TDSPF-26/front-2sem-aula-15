import { useEffect, useState } from "react";
import type { TipoUsuarioGit } from "../../types/types";

export default function Home() {
  document.title = "Home";

  const [usuarios, setUsuarios] = useState<TipoUsuarioGit[]>([]);

  useEffect(() => {
    async function loadingData() {
      try {
        const response = await fetch("https://api.github.com/users");

        if (!response.ok) {
          throw new Error("Erro ao buscar os usuários");
        }

        const data: TipoUsuarioGit[] = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadingData();
  }, []);

  return (
    <main>
      <h2>Home</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.login} - <img src={usuario.avatar_url} alt={usuario.login} width={30} />
          </li>
        ))}
      </ul>
    </main>
  );
}

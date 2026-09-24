import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { TipoProduto } from "../../types/types";

export default function EditarProduto() {
  document.title = "Editar Produtos";

  const { id } = useParams<string>();
  const [produto, setProduto] = useState<TipoProduto | null>(null);

  useEffect(() => {
    async function carregarProduto() {
      try {
        const response = await fetch(`http://localhost:3001/produtos/${id}`);

        if (!response.ok) {
          throw new Error("Produto não encontrado");
        }

        const data: TipoProduto = await response.json();
        setProduto(data);
      } catch (error) {
        console.error(error);
      }
    }

    carregarProduto();
  }, [id]);

  return (
    <main>
      <h2>Editar Produto</h2>
      <p>Id: {id}</p>
      {produto ? (
        <div>
          <h3>{produto.nome}</h3>
          <p>{produto.descricao}</p>
          <p>Preço: R$ {produto.preco}</p>
          <img src={produto.avatar} alt={produto.nome} />
        </div>
      ) : (
        <p>Carregando produto...</p>
      )}
    </main>
  );
}

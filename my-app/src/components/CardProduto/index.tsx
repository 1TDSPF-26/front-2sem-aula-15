import type { TipoProduto } from "../../types/types";
import { Link } from "react-router";
import { FaEdit, FaTrash } from "react-icons/fa";

type Props = {
  produto: TipoProduto;
};

export default function CardProduto({ produto }: Props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <h3>{produto.nome}</h3>
      <p>R${produto.preco}</p>
      <figure>
        <img src={produto.avatar} alt={produto.nome} width={100} />
        <figcaption>{produto.descricao}</figcaption>
      </figure>
      <div>
        <span>
          <Link to={`/editar-produtos/${produto.id}`}><FaEdit /></Link>
        </span>
        <span> - </span>
        <span><FaTrash /></span>
      </div>
    </div>
  );
}

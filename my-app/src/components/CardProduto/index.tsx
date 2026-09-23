import type { TipoProduto } from "../../types/types";
import { Link } from "react-router";

type Props ={
    produto : TipoProduto
}

export default function CardProduto({produto}: Props) {
  return (
    <div>
        <h3>{produto.nome}</h3>
        <p>${produto.preco}</p>
        <figure>
            <img src={produto.avatar} alt={produto.nome} width={60}/>
            <figcaption>{produto.descricao}</figcaption>
        </figure>
        <div>
            <span><Link to={`/editar-produtos/${produto.id}`}>Editar</Link></span> - <span>Excluir</span>
        </div>
    </div>
  )
}

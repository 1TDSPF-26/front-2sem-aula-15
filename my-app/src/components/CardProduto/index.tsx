import { Link } from "react-router";
import type { TipoProduto } from "../../types/types";

type Props = {
    produto: TipoProduto
}


export default function CardProduto({produto}:Props ) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", width: "200px" }}>
        <h3>{produto.nome}</h3>
        <p>R${produto.preco}</p>
        <figure>
            <img src={produto.avatar} alt={produto.nome} width={80}/>
            <figcaption>{produto.descricao}</figcaption>
        </figure>
        <div>
            <span><Link to={`/editar-produtos/${produto.id}`}>EDITAR</Link></span> - <span>EXCLUIR</span>
        </div>
    </div>
  )
}

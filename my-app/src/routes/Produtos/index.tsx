import { useEffect, useState } from "react"
import type { tipoProduto } from "../../Types/types";
import { Link } from "react-router";

export default function Produtos() {
    // Para alterar o título da página:
    document.title = "Produtos"

    const[produtos,setProdutos] = useState<tipoProduto[]>([]);

    useEffect (()=>{

        const carregarProdutos = async() =>{
            try{
                const response = await fetch("http://localhost:3001/produtos");
                if (!response.ok){
                    throw new Error ("Erro na listagem dos Produtos");
                }
                const data:tipoProduto[] = await response.json();

                setProdutos(data);

            }catch(error){
                console.log(error);
            }
        }
        carregarProdutos();

    },[])



    return (
        <main>
            <h2>Produtos</h2>
            <div>
                <table border={1} style={{width:"100%",borderCollapse:"collapse",border: "1px solid black"}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>PRECO</th>
                            <th>DESCRIÃO</th>
                            <th>AVATAR</th>
                            <th>AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto)=>(
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.preco}</td>
                                <td>{produto.descricao}</td>
                                <td><img src={produto.avatar} alt={produto.nome} width={40} /></td>
                                <td><Link to={`/editar-produtos/${produto.id}`}>EDITAR</Link></td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={6}>Quantidade de Registros: {produtos.length}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </main>
    )
}

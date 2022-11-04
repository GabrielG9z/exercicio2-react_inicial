import "./App.css";

import { useEffect, useState } from "react";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    async function getProdutos() {
      try {
        const resposta = await fetch("https://fakestoreapi.com/products");
        const dados = await resposta.json();

        console.log(dados);
        setProdutos(dados);
      } catch (error) {
        console.log("Deu ruim na busca post: " + error.message);
      }
    }
    getProdutos();
  }, []);
  return (
    <div className="caixa">
      <h2>Produtos</h2>
      <ul>
        {produtos.map(({ id, title, image, price }) => (
          <li key={id}>
            <p>
              <img class="foto-produto" src={image} alt="" />
            </p>
            <div className="descricao">
              <h2>{title}</h2>
              <p>
                {price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Produtos;

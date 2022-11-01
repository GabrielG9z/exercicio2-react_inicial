import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));
function App = () => {
  const [produtos, setProdutos] = useState([]);
  useEffect(()=> {
    async function getProdutod
  }
  )
};

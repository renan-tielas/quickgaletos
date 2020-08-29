import React from "react";
import Cabecalho from "../Cabecalho";
import Navegacao from "../Navegacao";
import estilo from "./pedido-estilo.module.css";
import Footer from "../Footer";
import CategoriaPedido from "./CategoriaPedido";
import CategoriaPedidoTitulo from "./CategoriaPedidoTitulo";

const cardapio = {
  carnes: {
    galeto: {
      codigo: 80,
      nome: "Galeto",
      preço: "R$ 25,80",
      preco: 25.8
    },

    filet: {
      codigo: 81,
      nome: "Filet Mignon",
      preço: "R$ 80,00",
      preco: 80.00,
    },
    "filet-quick": {
      codigo: 82,
      nome: "Filet Mignon Quick Galetos",
      preço: "R$ 86,00",
      preco: 86,
    },
    "contra-filet": {
      codigo: 83,
      nome: "Contra Filet",
      preço: "R$ 59,00",
      preco: 59,
    },
    churrasqueto: {
      codigo: 83,
      nome: "Churrasqueto",
      preço: "R$ 39,00",
      preco: 39,
    },
    "churrasco-misto": {
      codigo: 84,
      nome: "Churrasco Misto",
      preço: "R$ 84,00",
      preco: 84,
    },
    lombo: {
      codigo: 85,
      nome: "Lombo de Porco",
      preço: "R$ 39,00",
      preco: 39,
    },
    linguiça: {
      codigo: 86,

      nome: "Porção de Linguiça",
      preco: 15,
    },
    "linguiça-unidade": {
      codigo: 87,
      nome: "Linguiça",
      preco: 5,
    },
  },

  vegetais: {
    "espeto-vegetariano": {
      codigo: 18,
      nome: "Espeto Vegetariano",
      descricao:
        "Abobrinha Berinjela, Tomate e Cebola assadas na brasa com o tempero Quick Galetos",
      preco: 18,
    },
    "legumes-cozidos": {
      codigo: 89,
      nome: "Legumes Cozidos",
      preco: 18.8,
    },
    "salada-maionese": {
      codigo: 86,
      nome: "Salada de Maionese",
      preco: 22.8,
    },
    "salada-palmito": {
      codigo: 86,
      nome: "Salada de Palmito",
      preco: 32,
    },
    "caldo-verde": {
      codigo: 86,
      nome: "Caldo Verde",
      preco: 17,
    },
  },
};
let carnesNomes = [];
let vegetaisNomes = [];

for (const [key, value] of Object.entries(cardapio.carnes)) {
  carnesNomes.push(cardapio.carnes[key].nome);

  // console.log(key, value);
}

for (const [key, value] of Object.entries(cardapio.vegetais)) {
  vegetaisNomes.push(cardapio.vegetais[key].nome);

  // console.log(key, value);
}

let carnesPrecos = [];
let vegetaisPrecos = [];

for (const [key, value] of Object.entries(cardapio.carnes)) {
  carnesPrecos.push(cardapio.carnes[key].preco);

  // console.log(key, value);
}

for (const [key, value] of Object.entries(cardapio.vegetais)) {
  vegetaisPrecos.push(cardapio.vegetais[key].preco);

  // console.log(key, value);
}

const Pedido = (props) => {
  return (
    <div className={estilo.div_Inicio}>
     
      <div className={estilo.div_topo}>
        <Cabecalho />
        <Navegacao />
      </div>


      <div className={estilo.main_div_pedido}>


        <div className={estilo.carta_pedido}>

          <div className={estilo.categorias_pedido}>
          <CategoriaPedidoTitulo titulo="Mais Pedidos"></CategoriaPedidoTitulo>
            <CategoriaPedidoTitulo titulo="Carnes"></CategoriaPedidoTitulo>
            <CategoriaPedidoTitulo titulo="Vegetais"></CategoriaPedidoTitulo>
            <CategoriaPedidoTitulo titulo="Acompanhamentos"></CategoriaPedidoTitulo>

          </div>

          <div className={estilo.cont_itens_pedido}>

            <div className="titulo_itens_pedido">

            </div>
            <div className="itens_pedido">
            <CategoriaPedido
              titulo="Carnes"
              comidas={carnesNomes}
              precos={carnesPrecos}
            ></CategoriaPedido>
            {/* <CategoriaPedido
              titulo="Vegetais"
              comidas={vegetaisNomes}
              precos={vegetaisPrecos}
            ></CategoriaPedido> */}
            </div>
          </div>

        </div>

      </div>

      <div className={estilo.div_footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Pedido;

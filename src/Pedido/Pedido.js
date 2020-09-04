import React, { useState } from "react";
import Cabecalho from "../Cabecalho";
import Navegacao from "../Navegacao";
import estilo from "./pedido-estilo.module.css";
import Footer from "../Footer";
import CategoriaPedido from "./CategoriaPedido";
import CategoriaPedidoTitulo from "./CategoriaPedidoTitulo";
import ItemCardapio from "./ItemCardapio";

/*
Saídas:

paraCategoriaPedido
texto={comida}
preço=preçosArr =map dos preço no Obj cardapio
key= iteração do map dos nomes das comidas
*/

// const cardapiovelho = {

//   carnes: {
//     galeto: {
//       codigo: 80,
//       nome: "Galeto",
//       preço: "R$ 25,80",
//       preco: 25.8,
//       quantidade: 0 + quantia,
//     },

//     filet: {
//       codigo: 81,
//       nome: "Filet Mignon",
//       preço: "R$ 80,00",
//       preco: 80.00,
//       quantidade: 0+ quantia,
//     },
//     "filet-quick": {
//       codigo: 82,
//       nome: "Filet Mignon Quick Galetos",
//       preço: "R$ 86,00",
//       preco: 86,
//       quantidade: 0+ quantia,
//     },
//     "contra-filet": {
//       codigo: 83,
//       nome: "Contra Filet",
//       preço: "R$ 59,00",
//       preco: 59,
//       quantidade: 0+ quantia,
//     },
//     churrasqueto: {
//       codigo: 83,
//       nome: "Churrasqueto",
//       preço: "R$ 39,00",
//       preco: 39,
//       quantidade: 0+ quantia,
//     },
//     "churrasco-misto": {
//       codigo: 84,
//       nome: "Churrasco Misto",
//       preço: "R$ 84,00",
//       preco: 84,
//       quantidade: 0+ quantia,
//     },
//     lombo: {
//       codigo: 85,
//       nome: "Lombo de Porco",
//       preço: "R$ 39,00",
//       preco: 39,
//       quantidade: 0+ quantia,
//     },
//     linguiça: {
//       codigo: 86,
//       nome: "Porção de Linguiça",
//       preco: 15,
//       quantidade: 0+ quantia,
//     },
//     "linguiça-unidade": {
//       codigo: 87,
//       nome: "Linguiça",
//       preco: 5,
//       quantidade: 0+ quantia,
//     },
//   },

//   vegetais: {
//     "espeto-vegetariano": {
//       codigo: 18,
//       nome: "Espeto Vegetariano",
//       descricao:
//         "Abobrinha Berinjela, Tomate e Cebola assadas na brasa com o tempero Quick Galetos",
//       preco: 18,
//       quantidade: 0+ quantia,
//     },
//     "legumes-cozidos": {
//       codigo: 89,
//       nome: "Legumes Cozidos",
//       preco: 18.8,
//       quantidade: 0+ quantia,
//     },
//     "salada-maionese": {
//       codigo: 86,
//       nome: "Salada de Maionese",
//       preco: 22.8,
//       quantidade: 0+ quantia,
//     },
//     "salada-palmito": {
//       codigo: 86,
//       nome: "Salada de Palmito",
//       preco: 32,
//       quantidade: 0+ quantia,
//     },
//     "caldo-verde": {
//       codigo: 86,
//       nome: "Caldo Verde",
//       preco: 17,
//       quantidade: 0+ quantia,
//     },
//   },
// };

const CATEGORIASCardapio = ["carnes", "vegetais"];
// let carnes, vegetais= 0;
// const CATEGORIASCardapio = {carnes, vegetais}
// let galeto, churrasqueto, linguica = 0;
const NomesCarnes = ["galeto", "churrasqueto", "linguica","Contra Filet"];
// const NomesCarnes = {galeto,churrasqueto,linguica}
let codigo,
  nome,
  preco,
  quantidade,
  preço = 0;
// const CATEGORIASMeta = { codigo, nome, preco, quantidade, preço };
const CATEGORIASMeta = [ 'codigo', 'nome', 'preco', 'quantidade', 'preço' ];
let objetocardapio = {};




let codigoCarnes, precoCarnes, quantidadeCarnes, preçoCarnes=[];

codigoCarnes = [1,2,3,4]
precoCarnes = [1,2,3,4]
quantidadeCarnes =[1,2,3,4]
preçoCarnes = [1,2,3,4]


const geraCarnes = (NomesCarnes,CATEGORIASMeta,codigoCarnes, precoCarnes, quantidadeCarnes, preçoCarnes) => {

  let itensCarnes = {}

  for (let i = 0; i < NomesCarnes.length ; i++) {
    for (let j = 0; j < array.length; j++) {
      _`${NomesCarnes[i]}` = {CATEGORIASMeta}

  
      `${NomesCarnes[i]}`[CATEGORIASMeta[j]] = 1;
      switch (j) {
        case 0:
          `${NomesCarnes[i]}`[CATEGORIASMeta[j]] = codigoCarnes[i] ;
          break;
        case 1:
          `${NomesCarnes[i]}`[CATEGORIASMeta[j]] = NomesCarnes[i] ;
          break;
        case 2:
          `${NomesCarnes[i]}`[CATEGORIASMeta[j]] = precoCarnes[i] ;
          break;
        case 3:
          `${NomesCarnes[i]}`[CATEGORIASMeta[j]] = quantidadeCarnes[i] ;
          break;
        case 4:
          `${NomesCarnes[i]}`[CATEGORIASMeta[j]] = preçoCarnes[i] ;
          break;
        default:
          console.log(`Sorry we are out `);
      }
      
      
    }
    
    
    itensCarnes.push(`${NomesCarnes[i]}`)
  }
  

return (itensCarnes)
}















const geraCarnes = (NomesCarnes,CodigosCarnes,) => {




}





const itensCardapio ={

  80 : [80,'Galeto', 25.80, 0 ,'R$ 25,80'],
  83 : [83,'Churrasqueto',39.0,0,'R$ 39,90'],
  86 : [86,'Linguiça',15.0,0,'R$ 15,50'],
  
}

const geraCardapio = (CATEGORIASCardapio, NomesCarnes, CATEGORIASMeta) => {
  for (let i = 0; i < CATEGORIASCardapio.length; i++) {
    objetocardapio[CATEGORIASCardapio[i]] = NomesCarnes;

    for (let j = 0; j < NomesCarnes.length; j++) {
      objetocardapio[CATEGORIASCardapio[i]][NomesCarnes[j]] = CATEGORIASMeta;

      for (let y = 0; y < CATEGORIASMeta.length; y++) {
        objetocardapio[CATEGORIASCardapio[i]][NomesCarnes[j]][
          CATEGORIASMeta[y]] =itensCardapio[i];
      }




      
    }
  }
  return objetocardapio;
};

const geraCardapio3 = (CATEGORIASCardapio, NomesCarnes) => {
  for (let i = 0; i < CATEGORIASCardapio.length; i++) {
    objetocardapio[CATEGORIASCardapio[i]] = null;
    for (let j = 0; j < NomesCarnes.length; j++) {
      objetocardapio[CATEGORIASCardapio[i]] = [NomesCarnes[j]];
      for (let y = 0; y < CATEGORIASMeta.length; y++) {
        objetocardapio[CATEGORIASCardapio[i]][NomesCarnes[j]] = [
          CATEGORIASMeta[y],
        ];
      }
    }
  }
  return objetocardapio;
};

objetocardapio = geraCardapio(CATEGORIASCardapio, NomesCarnes, CATEGORIASMeta);
let carnesNomes = [];
let vegetaisNomes = [];
console.log(CATEGORIASCardapio.length);
console.log(CATEGORIASMeta.length);
console.log(objetocardapio);
// for (const [key, value] of Object.entries(objetocardapio.carnes)) {
//   carnesNomes.push(objetocardapio.carnes[key].nome);

//    console.log(value);
// }

// for (const [key, value] of Object.entries(objetocardapio.vegetais)) {
//   vegetaisNomes.push(objetocardapio.vegetais[key].nome);

//   // console.log(key, value);
// }

let carnesPrecos = [];
let vegetaisPrecos = [];

// for (const [key, value] of Object.entries(objetocardapio.carnes)) {
//   carnesPrecos.push(objetocardapio.carnes[key].preco);

//   // console.log(key, value);
// }

// for (const [key, value] of Object.entries(objetocardapio.vegetais)) {
//   vegetaisPrecos.push(objetocardapio.vegetais[key].preco);

//   // console.log(key, value);
// }

const Pedido = (props) => {
  //calculadora

  const [quantia, SetQuantia] = useState(0);

  const QuantiaMais = () => {
    SetQuantia((quantia) => quantia + 1);
  };

  const QuantiaMenos = () => {
    if (quantia > 0) {
      SetQuantia((quantia) => quantia - 1);
    }
  };

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
            <div className="titulo_itens_pedido"></div>
            <div className="itens_pedido">
              {/* switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
} */}

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

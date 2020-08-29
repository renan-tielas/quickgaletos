import React, {useState} from "react";
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

const CATEGORIASCardapio = ['carnes', 'vegetais']
const NomesCarnes = ["a","b"]

const CATEGORIASMeta = ['codigo','nome','preco','quantidade','preço']

let objetocardapio = {};

const geraCardapio = (CATEGORIASCardapio,NomesCarnes) => {



 
  
  for (let i = 0; i < CATEGORIASCardapio.length; i++) {
    for (let j = 0; j < NomesCarnes.length; j++) {
      for (let y = 0; y < CATEGORIASMeta.length; y++) {
        

            objetocardapio[CATEGORIASCardapio[i]][NomesCarnes[j]]= 
            {
              [CATEGORIASMeta[y]]:"2"
            }
            
        

        }
      }
      
      

        

      }
    }  



let carnesNomes = [];
let vegetaisNomes = [];
console.log(objetocardapio)
for (const [key, value] of Object.entries(objetocardapio.carnes)) {
  carnesNomes.push(objetocardapio.carnes[key].nome);

   console.log(value);
}

for (const [key, value] of Object.entries(objetocardapio.vegetais)) {
  vegetaisNomes.push(objetocardapio.vegetais[key].nome);

  // console.log(key, value);
}

let carnesPrecos = [];
let vegetaisPrecos = [];

for (const [key, value] of Object.entries(objetocardapio.carnes)) {
  carnesPrecos.push(objetocardapio.carnes[key].preco);

  // console.log(key, value);
}

for (const [key, value] of Object.entries(objetocardapio.vegetais)) {
  vegetaisPrecos.push(objetocardapio.vegetais[key].preco);

  // console.log(key, value);
}




const Pedido = (props) => {

//calculadora


const [quantia, SetQuantia] = useState(0);


  const QuantiaMais = () => {
    SetQuantia((quantia) => quantia + 1);
  }

  const QuantiaMenos = () => {

    if  (quantia>0) {
    SetQuantia((quantia) => quantia -1);
    }
}



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

import React from "react";
import Cabecalho from "../Cabecalho";
import Navegacao from "../Navegacao";
import estilo from "./pedido-estilo.module.css";
import Footer from "../Footer";
import CategoriaPedido from './CategoriaPedido'
import Comidas from '../Comidas'


const cardapio = {
  principais:{
  galeto : {
    codigo: 80,
    nome: "galeto",
    preco: 25.80
  },

  filet : {
    codigo: 81,
     nome: "Filet Mignon",
     preco: 80
   },
   "filet-quick" : {
    codigo: 82,
     nome: "Filet Mignon Quick Galetos",
     preco: 86
   },
   "contra-filet" : {
    codigo: 83,
     nome: "Contra Filet",
     preco: 59
   },
    churrasqueto : {
      codigo: 83,
       nome: "churrasqueto",
       preco: 39
     },
     "churrasco-misto" : {
      codigo: 84,
       nome: "Churrasco Misto",
       preco: 84
     },
     lombo : {
      codigo: 85,
       nome: "Lombo de Porco",
       preco: 39
     },
     linguiça : {
      codigo: 86,
       nome: "churrasqueto",
       preco: 15
     },
     "linguiça-unidade" : {
      codigo: 87,
       nome: "churrasqueto",
       preco: 5
     },
     "espeto-vegetariano" : {
      codigo:18,
       nome: "Espeto Vegetariano",
       descricao:"Abobrinha Berinjela, Tomate e Cebola assadas na brasa com o tempero Quick Galetos",
       preco: 18
     },
     "legumes-cozidos" : {
     codigo: 89,
      nome: "Legumes Cozidos",
      preco: 18.80
    },
    "salada-maionese" : {
      codigo: 86,
       nome: "Salada de Maionese",
       preco: 22.80    },
       "salada-palmito" : {
        codigo: 86,
         nome: "Salada de Maionese",
         preco: 32    },
         "caldo-verde" : {
          codigo: 86,
           nome: "Salada de Maionese",
           preco: 17    },

  }

};



const Pedido = (props) => {


  return (

  
    <div className={estilo.div_Inicio}>
      <div className={estilo.div_topo}>
        <Cabecalho />
        <Navegacao />
      </div>


      <div className={estilo.main_div_pedido}>


      <CategoriaPedido titulo="Carnes" comidas={cardapio.principais.galeto.nome}>
      </CategoriaPedido>
      <CategoriaPedido titulo="Vegetais" comidas={["galeto", "espetinho vegetariano","churrasqueto"]}>
      </CategoriaPedido>
     


    </div>

      <div className={estilo.div_footer}>
        <Footer />
      </div>

    </div>
  );
};

export default Pedido;

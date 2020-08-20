import React from "react";
import { useState } from "react";
import ItemPedido from "./ItemPedido"
import Cabecalho from "../Cabecalho";
import Navegacao from "../Navegacao";
import estilo from "./pedido-estilo.module.css";
import Footer from "../Footer";
import CategoriaPedido from './CategoriaPedido'
const Pedido = (props) => {
  return (

  
    <div className="div_Inicio">
      <div className="div_topo">
        <Cabecalho />
        <Navegacao />
      </div>


      <div className={estilo.main_div}>


      <CategoriaPedido titulo="Mais Pedidos" numero_ped="5" comidas={["galeto", "espetinho vegetariano","churrasqueto","salada","farofa de ovos"]}>
      </CategoriaPedido>
      <CategoriaPedido titulo="Mais Pedidos" numero_ped="5" comidas={["galeto", "espetinho vegetariano","churrasqueto","salada","farofa de ovos"]}>
      </CategoriaPedido>
      <CategoriaPedido titulo="Mais Pedidos" numero_ped="5" comidas={["galeto", "espetinho vegetariano","churrasqueto","salada","farofa de ovos"]}>
      </CategoriaPedido>
      <CategoriaPedido titulo="Mais Pedidos" numero_ped="5" comidas={["galeto", "espetinho vegetariano","churrasqueto","salada","farofa de ovos"]}>
      </CategoriaPedido>


    </div>

      <div className="div_footer">
        <Footer />
      </div>

    </div>
  );
};

export default Pedido;

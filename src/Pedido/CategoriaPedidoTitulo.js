import React from "react";
import ItemPedido from './ItemPedido'
import estilo from "./pedido-estilo.module.css";


//entradasprops:  titulo

const CategoriaPedidoTitulo = (props) => {

  return (
        
    <div className={estilo.categoria_comida_pedido}>
      
      <div   className={estilo.titulo_categoria_pedido} > {props.titulo} </div>
      
    </div>

  );

}

export default CategoriaPedidoTitulo;

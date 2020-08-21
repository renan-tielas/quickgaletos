import React from "react";
import ItemPedido from './ItemPedido'
import estilo from "./pedido-estilo.module.css";


const CategoriaPedido = (props) => {
  
  return (
        
    <div className={estilo.categoria_comida_pedido}>
{props.comidas.map((comida, i) => <ItemPedido texto={comida} key={i} />)}
  
        

{/*           '
          <ItemPedido texto={props.comidas[1]}/>
          <ItemPedido texto={props.comidas[2]}/>
          <ItemPedido texto={props.comidas[3]}/>
          <ItemPedido texto={props.comidas[4]}/> */}
    </div>

  );

}

export default CategoriaPedido;

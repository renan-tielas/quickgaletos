import React from "react";
import ItemPedido from './ItemPedido'
import estilo from "./pedido-estilo.module.css";




/* entradas: 
titulo="Carnes"
comidas={carnesNomes}
precos={carnesPrecos}
*/

/*saidas

para <ItemPedido:
texto={comida}
preço=preçosArr =map dos preço no Obj cardapio
key= iteração do map dos nomes das comidas

*/


const CategoriaPedido = (props) => {
  

let precosArr = []
  {props.precos.map((preço, i) => precosArr.push(preço))}

  return (
        
    <div className={estilo.categoria_comida_pedido} key={props.titulo}> 
      <div   className={estilo.titulo_categoria_pedido} > {props.titulo}</div>
      {/* Exibe ITEMS do props.comida */}
      {props.comidas.map((comida, i) => <ItemPedido texto={comida} preço={precosArr[i]} key={i} />)}
      
    </div>

  );

}

export default CategoriaPedido;

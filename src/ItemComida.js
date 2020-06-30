import React from 'react'


const ItemComida  = (props) =>
{
return (

    <div className="item-comida">
    <div className="nome-comida"> <div className="texto-nome-comida"> {props.nome}</div></div>
    <div className="cont-comida">
    <img className="img-comida" 
    src={require(`./arquivos/${props.arq}`)} 
    alt={props.nome} />
    </div>
    <span className="preco-comida">{props.preco}</span>
    </div>
  
)
}

export default ItemComida
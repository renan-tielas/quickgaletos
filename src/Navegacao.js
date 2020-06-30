import React from 'react'
import Botao from './Botao';





const Navegacao = () =>{
return(
    <nav className="navegacao">

    <Botao texto="Início" rota="/" />
    <Botao texto="Nossa História" />
    <Botao texto="Cardápio" rota="/cardapio" />
    <Botao texto="Galeria" />
    <Botao texto="Entrega" />
    <Botao texto="Contato" />
  </nav>

)

}

export default Navegacao
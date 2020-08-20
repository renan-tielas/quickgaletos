import React from 'react'
import Botao from './Botao';
import Botao_C from './Botao_C';




const Navegacao = () =>{
return(
    <nav className="navegacao">

    <Botao texto="Início" rota="/" />
    <Botao texto="História" />
    <Botao texto="Cardápio" rota="/cardapio" />
    <Botao_C texto="Faça seu Pedido" rota="/pedido"/>
    <Botao texto="Galeria" />
    <Botao texto="Local" />
    {/* colocar visao 3d do google ou uma panoramica e o maps ao lado */}
    <Botao texto="Contato" />
  </nav>

)

}

export default Navegacao
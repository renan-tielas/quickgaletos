import React from 'react';

import PreviaComidas from './PreviaComidas';
import PreviaCardapio from './PreviaCardapio';
import Navegacao from './Navegacao';
import Cabecalho from './Cabecalho';
import Footer from './Footer';
const InicioN = () => {
  return (
    <div className="div_Inicio">
      <div className="div_topo">
        <Cabecalho />
        <Navegacao />
        <div className="div_espaço"></div>
      </div>
      <div className="main_div">
        <PreviaComidas />
        <PreviaCardapio />
      </div>
      <div className="div_footer">
      <Footer/>
      </div>
    </div>
  );
};

export default InicioN;

/* FAZER OUTRO DIV COM NOVIDADES 
  

      >APRESENTAÇÃO DA NOVIDADE
      > IMAGEM, como o comunicado
       
        Fazer o scroll click lateral das comidas da pag principal
        de acordo com categorias
        tipo Mais pedidas 1 e 2
        Carnes 1 2 3
        Acompanhamentos 1 2


        Podendo escolher clicando na setinha lateral, ou em uma caixa
        de seleçao, que cai

        Hover na imagem aumenta a imagem
        ou adiciona ao pedido
        
        >pagina pedido calcula o somatório dos itens marcados


      galeria com fotos com clientes

      página de entrega explicando o tempo, como é feita, quanto custa
      em que lugares
       
       
       */

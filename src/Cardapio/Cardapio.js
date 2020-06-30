import React, { useState } from 'react';

import Cabecalho from '../Cabecalho';
import Navegacao from '../Navegacao';
import estilo from './cardapio-estilo.module.css';
import Footer from '../Footer';

const Cardapio = () => {
  const [pagina, SetPagina] = useState(1);

  const paginaMais = () => {
    if (pagina < 3) {
      SetPagina((pagina) => pagina + 1);
    }
  };
  const paginaMenos = () => {
    if (pagina > 1) {
      SetPagina((pagina) => pagina - 1);
    }
  };

  return (
    <div className="div_Inicio">
      <div className="div_topo">
        <Cabecalho />
        <Navegacao />
      </div>
      <div className={estilo.main_div}>
        <div className={estilo.cont_post_cardapio}>
          <div className={estilo.titulo_cardapio}>Cardápio</div>
          <div className={estilo.cont_cardapio}>
            <img
              src={require(`../arquivos/cardapio-${pagina}.jpg`)}
              className={estilo.previaCardapio2}
              alt="Cardápio"
            ></img>
          </div>
          <div className={estilo.troca_pag}>
            <button onClick={paginaMenos}>&#60;</button>
            &#160; Página {pagina} &#160;
            <button onClick={paginaMais}>&#62;</button>
          </div>
        </div>
      </div>
      <div className="div_footer">
      <Footer/>
      </div>
    </div>
  );
};

export default Cardapio;

import React, { useState } from 'react';

import Cabecalho from '../Cabecalho';
import Navegacao from '../Navegacao';
import estilo from './ADM-estilo.module.css';
import Footer from '../Footer';

const ADM = () => {
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
        <div>
          
        </div>
      </div>
      <div className="div_footer">
      <Footer/>
      </div>
    </div>
  );
};

export default ADM;

import React from 'react'
import { useState } from 'react';

import Cabecalho from '../Cabecalho';
import Navegacao from '../Navegacao';
import estilo from './pedido-estilo.module.css';
import Footer from '../Footer';

const Pedido = (props) => {

return (






    <div className="div_Inicio">
      <div className="div_topo">
        <Cabecalho />
        <Navegacao />
      </div>
      <div className={estilo.main_div}>
   

<div>
<div className="categoria-comida-pedido">
<a className="titulo-comida-pedido">
{props.texto}
</a>
<span className="mais-comida-pedido">
+
</span>
 
 
</div>


<div className="categoria-comida">
    
 
</div>


<div className="categoria-comida">
    
 
</div>
</div>

      </div>
      <div className="div_footer">
      <Footer/>
      </div>
    </div>





)

}



export default Pedido
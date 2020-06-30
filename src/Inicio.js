import React from 'react';
import { isMobile } from 'react-device-detect';

import InicioC from './InicioC'
import InicioN from './InicioN'


function Inicio() {

    if (isMobile) {
        return (
         <InicioC></InicioC>
        );
      }
    
    //versao web
    return (
  <InicioN/>
    );

}

export default Inicio
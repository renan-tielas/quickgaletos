import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Inicio from './Inicio'
import Cardapio from './Cardapio/Cardapio'

const Rotas = () => {
return (
<div>
    {/* <Inicio/> */}
    <BrowserRouter>

    <Route component={Inicio} path="/" exact/>
    <Route component={Cardapio} path="/cardapio" exact/>

    </BrowserRouter>
    
</div>
)
}


export default Rotas
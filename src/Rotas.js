import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Inicio from './Inicio'
import Cardapio from './Cardapio/Cardapio'
import Pedido from './Pedido/Pedido'

const Rotas = () => {
return (
<div>
    {/* <Inicio/> */}
    <BrowserRouter>

    <Route component={Inicio} path="/" exact/>
    <Route component={Cardapio} path="/cardapio" exact/>
    <Route component={Pedido} path="/pedido" exact/>
    </BrowserRouter>
    
</div>
)
}


export default Rotas
import React from 'react'

import BotaoMob from './mobile/BotaoMob';



const InicioC = (props) => {

return(
<div>
<nav className="navegacaoMob">
  <BotaoMob texto="Início" />
  <BotaoMob texto="Nossa História" />
  <BotaoMob texto="Cardápio" />
  <BotaoMob texto="Galeria" />
  <BotaoMob texto="Entrega" />
  <BotaoMob texto="Contato" />
</nav>

<div className="main_div"></div>
</div>

)
}

export default InicioC
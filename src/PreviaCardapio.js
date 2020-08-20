import React, { useState } from 'react';

const PreviaCardapio = () => {
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
    <div className="postCardapioEntregas">
      <div className="cont-post-cardapio">
        <div className="titulo-cardapio">Cardápio</div>
        <div className="cont-cardapio">
          <img
            src={require(`./arquivos/cardapio-${pagina}.jpg`)}
            className="previaCardapio"
            alt="comida"
          ></img>
        </div>

        <div className="troca-pag2">
        <button  onClick={paginaMenos}>&#60;</button>
          {/* &#160; Página {pagina} &#160; */}
          <div className="titulo-trocapag">&#160;Página {pagina} &#160;</div>
          <button  onClick={paginaMais}>&#62;</button>
        </div>

      </div>

      <div className="cont-entregas">
        <div className="titulo-entrega">Entregas</div>
        <div className="entregas"> 
        <div className="previaEntregas">
          <div className="texto-entregas"> Ligue ou peça pelo whatsapp: 2541-2897 <br/> <br/>  Entregamos sem taxa em Copacabana e Leme.<br/> <br/> Para Ipanema, Botafogo, Humaitá e Urca a taxa de entrega é de R$ 6,00</div>
        </div>
        <div className="botaoEntrega"> 
        
        <a href="http://wa.me/552125412897" className="logo-zap"></a>  
        Whatsapp
        </div>
        </div>
      </div>
    </div>
  );
};

export default PreviaCardapio;

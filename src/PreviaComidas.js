import React, { useState } from 'react';
import ItemComida from './ItemComida';

const PreviaComidas = () => {
  const [pagina_comidas, SetPagina] = useState(0);

  const paginaMais = () => {
    if (pagina_comidas < 1) {
      SetPagina((pagina_comidas) => pagina_comidas + 1);
    }
  };
  const paginaMenos = () => {
    if (pagina_comidas > 0) {
      SetPagina((pagina_comidas) => pagina_comidas - 1);
    }
  };

  const comidas = {
    id: [1, 2, 3, 4, 5, 6],

    nome: [
      ['Galetooooooo', 'galeto 2'],
      ['Linguiça e Frita', 'Linguiça e Frita2'],
      ['Salada e Suco', 'Salada e Suco2'],
      ['Pudim', 'Pudim2'],
      ['Batata Frita', 'Batata Frita2'],
      ['Farofa à Brasileira', 'Farofa à Brasileira2'],
    ],

    arq: [
      ['foto-3.jpg', 'foto-6.jpg'],
      ['foto-6.jpg', 'foto-3.jpg'],
      ['foto-2.jpg', 'foto-6.jpg'],
      ['foto-7.jpg', 'foto-6.jpg'],
      ['foto-8.jpg', 'foto-6.jpg'],
      ['foto-10.jpg', 'foto-8.jpg'],
    ],

    preco: [
      ['R$ 26,90', 'R$ 20,90'],
      ['R$ 25,90', 'R$ 20,90'],
      ['R$ 19,90', 'R$ 20,90'],
      ['R$ 8,90', 'R$ 20,90'],
      ['R$ 22,90', 'R$ 20,90'],
      ['R$ 20,90', 'R$ 20,90'],
    ],
  };

  return (
    <div className="postComidas">
      <div className="troca-pag">
        <button onClick={paginaMenos}>&#60;</button>
        <div className="titulo-comidas">&#160;&#160;Mais Pedidas &#160;</div>
        <button onClick={paginaMais}>&#62;</button>
      </div>

      <div className="comidas">
        <ItemComida
          nome={comidas.nome[0][pagina_comidas]}
          arq={comidas.arq[0][pagina_comidas]}
          preco={comidas.preco[0][pagina_comidas]}
        />
        <ItemComida
          nome={comidas.nome[1][pagina_comidas]}
          arq={comidas.arq[1][pagina_comidas]}
          preco={comidas.preco[1][pagina_comidas]}
        />
        <ItemComida
          nome={comidas.nome[2][pagina_comidas]}
          arq={comidas.arq[2][pagina_comidas]}
          preco={comidas.preco[2][pagina_comidas]}
        />
        <ItemComida
          nome={comidas.nome[3][pagina_comidas]}
          arq={comidas.arq[3][pagina_comidas]}
          preco={comidas.preco[3][pagina_comidas]}
        />
        <ItemComida
          nome={comidas.nome[4][pagina_comidas]}
          arq={comidas.arq[4][pagina_comidas]}
          preco={comidas.preco[4][pagina_comidas]}
        />
        <ItemComida
          nome={comidas.nome[5][pagina_comidas]}
          arq={comidas.arq[5][pagina_comidas]}
          preco={comidas.preco[5][pagina_comidas]}
        />
      </div>
    </div>
  );
};

export default PreviaComidas;

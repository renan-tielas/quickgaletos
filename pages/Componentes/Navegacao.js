import styles from '../../styles/componentes.module.css'

import Botao_pag from './Botao_pag';
// import Button from '@material-ui/core/Button';

const Navegacao = () => {
    return (
      <div className={styles.navegacao}>
       <Botao_pag texto='Quem somos'/>
       <Botao_pag texto='Nossas Ações'/>
       <Botao_pag texto='Escola Agroecológica'/>
       <Botao_pag texto='Venha nos Visitar'/>
       <Botao_pag texto='Doações'/>
      </div>
    );
  };
  
  export default Navegacao;
  

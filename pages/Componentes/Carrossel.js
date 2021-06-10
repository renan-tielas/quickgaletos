import styles from '../../styles/componentes.module.css'

import Cartao from './Cartao';


const Carrossel = () => {
    return (
      <div className={styles.carrossel}>
       <Cartao texto='Ações'/>
       <Cartao texto='Doações'/>
       <Cartao texto='Realidades'/>
     
      </div>
    );
  };
  
  export default Carrossel;
  

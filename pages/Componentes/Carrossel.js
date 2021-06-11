import styles from '../../styles/componentes.module.css'

import Cartao from './Cartao';
import Divisoria from './Divisoria'

const Carrossel = () => {
    return (
      <div className={styles.carrossel}>
       <Cartao texto='Ações'/>
       <Divisoria/>
       <Cartao texto='Doações'/>
       <Divisoria/>
       <Cartao texto='Realidades'/>
     
      </div>
    );
  };
  
  export default Carrossel;
  

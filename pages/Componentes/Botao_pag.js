import styles from '../../styles/componentes.module.css'

// import Navegacao from './layout/Navegacao';


const Botao_pag = ({texto}) => {
    return (
      <button className={styles.botao_pag}>
       <div className={styles.titulo_sobe}>{texto}</div>
      </button>
    );
  };
  
  export default Botao_pag;
  

import styles from '../../styles/rodape.module.css'

// import Navegacao from './layout/Navegacao';


const Rodape = () => {
    return (
      
      <footer className={styles.rodape}>
        <a
          href="https://facebook.com/sitiodocafe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sitio do Café
          <span className={styles.logo}>
            {/* <Image src="../public/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </span>
        </a>
      </footer>
    );
  };
  
  export default Rodape;
  

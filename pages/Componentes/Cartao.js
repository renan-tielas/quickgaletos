import styles from '../../styles/componentes.module.css'
import Image from 'next/image'
// import Navegacao from './layout/Navegacao';


const Cartao = ({texto}) => {
    return (
      <div className={styles.cartao_3}>
       {texto}
       <Image
        src="/me.png"
        alt="descrição"
        width={150}
        height={150}
       />
       <div className={styles.conteudo_cartao_3}>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
       Duis consectetur imperdiet tellus, sit amet iaculis tortor sagittis sed. 
       Praesent tristique id lacus id pretium. Vestibulum et justo mauris. 
       
       Donec dapibus vestibulum mollis. Quisque sit amet viverra mi. 
       In vulputate rhoncus dui sit amet sodales. Sed feugiat, magna sit amet scelerisque bibendum, 
       nisi eros faucibus justo, et faucibus ipsum ligula a mi. 
       Phasellus nunc sem, suscipit vel odio eget, suscipit venenatis elit. 
       Quisque sed consequat tortor. Sed tempus euismod sapien quis tincidunt. 
       Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
       </div>
      </div>
    );
  };
  
  export default Cartao;
  

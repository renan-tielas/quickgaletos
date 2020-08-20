import React from 'react'
import {Link} from 'react-router-dom'

const Botao_C = (props) => {

    return (

        
    <Link to={props.rota} className="botao_c">
    {props.texto}
    </Link>
    );


}



export default Botao_C
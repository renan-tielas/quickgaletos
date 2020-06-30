import React from 'react'
import {Link} from 'react-router-dom'

const Botao = (props) => {

    return (

        
    <Link to={props.rota} className="botao">
    {props.texto}
    </Link>
    );


}



export default Botao
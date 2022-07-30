import React from 'react';
import './estilo.css';

export default function ItemLista(props){
  return(
    <div className='boxSigno'>
      <div className='nomeSigno'>
        { props.signo }
      </div>

      <img className='imagemSigno' src='/assets/aquario.jpg' alt='Aquário' />
      <div className='periodoNascimento'>
        { props.dataInicio } - { props.dataFim }
      </div>
    </div>
  );
}
import React from 'react';
import { Imagem } from './Imagem.js';
import { Navegacao } from './Navegacao.js';

export default function Topo(){
  return(
    <header>
      <div className='limita-secao'>
        <Imagem />
        <Navegacao />
      </div>
    </header>
  );
}
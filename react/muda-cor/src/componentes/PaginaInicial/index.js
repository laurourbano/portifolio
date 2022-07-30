import React, {useState} from 'react';
import './style.css'

export default function PaginaInicial (){

  const corDeFundoVermelho = 'bg-red';
  const corDeFundoAzul = 'bg-blue';

  const [estiloAtualizado, setEstiloAtualizado] = useState(true);

  const alterarCor = () => {
    setEstiloAtualizado(!estiloAtualizado)
  };

  return (
    <div className='display'>
      <div className='container'>
        <h2>Alterando estilo do elemento</h2>
        <div className={estiloAtualizado ? corDeFundoVermelho : corDeFundoAzul}></div>
        <p>Clique no botão para alterar o estilo do elemento acima.</p>
        <button onClick={alterarCor}>Alterar</button>
      </div>
    </div>
  );
}
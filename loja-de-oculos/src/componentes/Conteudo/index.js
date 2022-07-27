import React from "react";
import SecaoCapa from "../SecaoCapa";
import SecaoProdutos from "../SecaoProdutos";
import SecaoSobre from "../SecaoSobre";
import SecaoContato from "../SecaoContato";

export default function Conteudo(){
  return(
    <section>
      <SecaoCapa />
      <SecaoProdutos />
      <SecaoSobre />
      <SecaoContato />
    </section>
  )
}

const data = document.querySelector(".data");
const dia = new Date().getDate();
const mes = new Date().getMonth() + 1;
const ano = new Date().getFullYear();
const dataAtual = ano+"_"+mes+"_"+dia;
data.innerHTML += dataAtual;

const dataFormatada = document.querySelector(".dataFormatada");
const dataNova = (dia)+"/"+(+mes)+"/"+ano;
dataFormatada.innerHTML += dataNova;

const dataIndeferimento = document.querySelector(".dataIndeferimento");
const dia1 = new Date().getDate();
const mes1 = new Date().getMonth() + 1;
const ano1 = new Date().getFullYear();
const dataAtual1 = dia1+"/"+mes1+"/"+ano1;
dataIndeferimento.innerHTML = (`INDEFERIDO REQUERIMENTO DE BAIXA.
DOCUMENTOS SOLICITADOS PARA CORREÇÃO DO PROCEDIMENTO DE BAIXA DE RT NÃO FORAM ENVIADOS NO PRAZO DE 01 
(UM) DIA ÚTIL DA RESPOSTA DO CRF-PR.
* DEVERÁ INICIAR NOVO REQUERIMENTO DE BAIXA DE RESPONSABILIDADE TÉCNICA, ANEXANDO TODOS OS DOCUMENTOS NECESSÁRIOS.
FAVOR CONSULTAR PASSO A PASSO NO LINK https://www.crf-pr.org.br/noticia/visualizar/46459

DATA DA SOLICITAÇÃO – ${dataAtual1}

MOTIVO DO INDEFERIMENTO:
– FALTOU QUEBRA DE VÍNCULO DE TRABALHO; (PÁGINA DA CTPS DO CONTRATO COM DATA DE SAÍDA E ASSINATURA DA 
EMPRESA OU RESCISÃO COM ASSINATURA DA EMPRESA E DO PROFISSIONAL);
– FALTOU DECLARAÇÃO DE BAIXA DA VIGILÂNCIA SANITÁRIA;
– FALTOU APRESENTAR A CTPS COM ANOTAÇÃO/DECLARAÇÃO DA TRANSFERÊNCIA, INDICANDO A DATA DA TRANSFERÊNCIA E O CNPJ 
PARA ONDE FOI TRANSFERIDO; (DOCUMENTO ASSINADO PELA EMPRESA)
PORÉM, PARA AMBOS É OBRIGATÓRIO SER ASSINADA PELA EMPRESA*
OU
- CASO AINDA NÃO POSSUA TODOS OS DOCUMENTOS, PODERÁ APRESENTAR  FORMULÁRIO DE REQUERIMENTO PREENCHIDO 
E ASSINADO *PELO REPRESENTANTE LEGAL E PELO PROFISSIONAL*
(MARCANDO TODOS OS DOCUMENTOS QUE FALTAM E O MOTIVO).
- FALTA ASSINATURA, DO REPRESENTANTE LEGAL, NO REQUERIMENTO DE BAIXA PARA BAIXAR SEM DOCUMENTOS;`);

/*
são declaradas constantes para os prazos;
o usuário seleciona a data;
o valor é guardado em uma variável;

*/
var input = document.querySelector("#data");
var prazo = document.querySelector(".prazo");
var trinta = new Date();
trinta.setDate(trinta.getDate() + 30); // Adiciona 3 dias
input.addEventListner("input", prazo.value){
    return prazo.innerHTML = prazo.value;
};

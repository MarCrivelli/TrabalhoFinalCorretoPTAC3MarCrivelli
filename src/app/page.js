'use client'
import { useEffect, useState } from 'react';
import Image from "next/image";
import "./styles.css";
import Link from "next/link";
import { listaDeJogos } from "./api/route";
import ErroNoFetch from './componentes/ErroNoFetch';
import Carregando from './componentes/Carregando';

export default function Home() {
  //vai definir uma lista para inserir o objeto contendo os jogos.
  const [listaJogos, setListaJogos] = useState([]);
  const [teveErro, setTeveErro] = useState(false);

  useEffect(()=>{
    const pegaJogos = async() =>{
      try{
        const response = await fetch('./api/route');
        const data = await response.json();
        setListaJogos(listaDeJogos);
      }
      catch{
        setTeveErro(true); 
      }
    }
    pegaJogos();
  }, []);

  if(teveErro == true){
    return <ErroNoFetch/>
  }

  if(listaJogos[0] == null){
    return <Carregando/>
  }


  return (
    <main>
      <h1 class="titulo">Lista de jogos</h1>
      <div class="alinhamento">
        {listaJogos.map((jogo) =>
          <div class="card" key={jogo.id}>
            <h1>{jogo.nome}</h1>
            <a href={jogo.enderecoImagem} target="_blank">
              <Image width={1000} height={1000} class="imagemJogo" src={jogo.imagem}/>
            </a>
            {/*   Abaixo tem uma função que serve para basicamente verificar se a propriedade "fundador" é um array ou não, pois podem ter mais de 1 fundador para um jogo.
                Antes do "?" é um condição, ou seja, se a propriedade fundador é um array. Depois do "?" é o que vai ser retornado caso sejam mais de 1 fundador, onde 
                vai ser criador uma string com uma vírgula separando os elementos dos do array. Depois dos dois pontos, indica que caso tenha só um fundador, será retornado apenas o nome dele.
            */}
            <p>Fundador: {Array.isArray(jogo.fundador) ? jogo.fundador.join(', ') : jogo.fundador}</p>
            <p>Ano de lançamento: {jogo.anoFundacao}</p>
            <p> Empresa fundadora: {jogo.empresaFundadora}</p>
            <Link href={"/jogo/" + jogo.id}>
              <button class="botao">Ver mais</button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

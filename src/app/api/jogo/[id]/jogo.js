import style from "./jogo.module.css"
import Image from "next/image";
import Link from "next/link";
export default async function Jogo({params}){
    const response = await fetch("http://localhost:3000/api/" + params.id);
    const data = await response.json();
    return(
        <div className={style.jogo}>
            <div className={style.card}>
                <Image width={100} height={100} className={style.imagemJogo} src={data.imagem}/>
                <p className={style.textosCard}>{data.nome}</p>
                <p className={style.textosCard}>R${data.fundador}</p>
                <p className={style.descricao}>{data.anoFundacao}</p>
                <p className={style.descricao}>{data.empresaFundadora}</p>
                <Link href={"/"}>
                  <button>Voltar</button>
                </Link>
            </div>
        </div>
    );
}
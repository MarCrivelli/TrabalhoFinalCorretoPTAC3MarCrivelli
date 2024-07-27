import Image from "next/image";
import style from "./carregando.module.css"
export default function Carregando(){
    return(
        <div className={style.alinharCarregando}>
            <Image width={100} height={100} alt="" src="/carregando.svg"/>
            <h2 className={style.mensagemCarregando}>Estamos carregando as informações. Por favor aguarde!</h2>
        </div>
    );
}
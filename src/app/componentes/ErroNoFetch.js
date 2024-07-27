import style from "./ErroNoFetch.module.css"
export default function ErroNoFetch(){
    return(
        <div className={style.paginaDeErro}>
            <h1>Erro! Ocorreu um problema com a conexão do servidor</h1>
        </div>
    );
}
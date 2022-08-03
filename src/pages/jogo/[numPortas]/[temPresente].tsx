import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../../functions/porta";
import style from "../../../styles/jogo.module.css"
import Link from "../../../../node_modules/next/link";
import { useRouter } from "../../../../node_modules/next/router";


export default function Jogo() {

    const [ portas,setPortas ] = useState([]);
    const [ valido,setValido ] = useState(false);
    const router = useRouter()

    useEffect(()=>{
        const numPortas = +router.query.numPortas
        const temPresente = +router.query.temPresente
        
        const portasValidas = numPortas >= 3 && numPortas <=100
        const temPresenteValido = temPresente >= 1 && temPresente <= numPortas

        setValido(portasValidas && temPresenteValido)

        setPortas(criarPortas(numPortas,temPresente))
    },[router?.query])

    

    function renderizarPortas() {
      return portas.map(porta=>{
        return <Porta  key={porta.numero} value={porta} 
        onChange={novaPorta => setPortas(atualizarPortas(portas,novaPorta)) } />
      })
    }

    return(
        <div id={style.jogo}>
            <div className={style.portas}>
                {valido ?
                renderizarPortas() :
                <h2>Valores Inválidos</h2>
                }
            </div>
            <div className={style.botoes}>
                <Link href='/'>
                    <button>
                        Reiniciar Jogo
                    </button>
                </Link>
            </div>
        </div>
    )
}
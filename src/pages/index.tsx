import { useState } from "react";
import Link from "../../node_modules/next/link";
import EntradaNumerica from "../components/entradaNumerica";
import Card from "../components/Card";
import style from "../styles/form.module.css"

export default function Form() {
  
  const [qtdePortas,setQtdePortas] = useState(3)
  const [comPresente,setComPresente] = useState(2)

  return (
      <div className={style.formulario}>     
        <div>
          <Card bgcolor="#c0392c">
            <h1>Monty Holl</h1>
          </Card>
          <Card>
            <EntradaNumerica 
              value={qtdePortas} 
              text="Qtde Portas:" 
              onChange={novaQtdePortas => setQtdePortas(novaQtdePortas)} />
          </Card>        
        </div>        
        <div>
          <Card>
            <EntradaNumerica 
              value={comPresente}
              text={"Porta com Presente ?"}
              onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}
            />
          </Card>        
          <Card bgcolor="#28a085">
            <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
              <a>
                <h2 className={style.link}>Iniciar</h2>   
              </a>
            </Link>
          </Card>        
        </div>
      </div>
  )
}

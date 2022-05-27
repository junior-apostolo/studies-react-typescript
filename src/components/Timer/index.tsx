import Button from "../Button"
import Watch from "./Watch"
import style from './Timer.module.scss'
import { tempoParaSegundos } from "../../common/utils/time"
import { ITarefa } from "../../types/tarefa"
import { useState } from "react"

interface Props {
  selecionado: ITarefa | undefined
}

export default function Timer({selecionado}: Props){
  const [tempo,setTempo] = useState<number>();
  if(selecionado?.tempo){
    setTempo(tempoParaSegundos(selecionado.tempo))
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronomentro</p>
      Tempo: {tempo}
      <div className={style.relogioWrapper}>
        <Watch/>
      </div>
      <Button>
        Começar
      </Button>
    </div>
  )
}
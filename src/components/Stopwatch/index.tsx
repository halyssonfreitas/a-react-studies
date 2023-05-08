import { useEffect, useState } from "react"
import { tempoParaSegundos } from "../../common/utils/time"
import { ITarefa } from "../../types/ITarefa"
import Button from "../Button"
import Clock from "./Clock"
import style from "./Stopwatch.module.scss"

interface Props {
  selecionado: ITarefa | undefined,
  finalizarTarefa: () => void
}

function Stopwatch({ selecionado, finalizarTarefa }: Props) {

  const [tempo, setTempo] = useState<number>()

  useEffect(() => {
    selecionado?.tempo && setTempo(tempoParaSegundos(selecionado.tempo))
  }, [selecionado])

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1)
        return regressiva(contador - 1)
      }
      finalizarTarefa()
    }, 1000)
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronometro</p>
      <div className={style.clockWrapper}>
        <Clock tempo={tempo} />
      </div>
      <Button onClick={() => regressiva(tempo)}>
        Começar!
      </Button>
    </div>
  )
}

export default Stopwatch
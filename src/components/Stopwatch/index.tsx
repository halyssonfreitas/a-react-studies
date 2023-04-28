import { tempoParaSegundos } from "../../common/utils/date"
import Button from "../Button"
import Clock from "./Clock"
import style from "./Stopwatch.module.scss"

function Stopwatch() {
  console.log('conversao: ', tempoParaSegundos("01:01:01"))
  return(
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronometro</p>
      <div className={style.clockWrapper}>
        <Clock/>
      </div>
      <Button>
        Começar!
      </Button>
    </div>
  )
}

export default Stopwatch
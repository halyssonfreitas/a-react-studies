import Button from "../Button"
import Clock from "./Clock"
import style from "./Stopwatch.module.scss"

function Stopwatch() {
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
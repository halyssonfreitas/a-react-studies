import style from "./Item.module.scss"
import { ITarefa } from "../../../types/ITarefa";

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Item(
  { descricao,
    tempo,
    completado,
    selecionado,
    id,
    selecionaTarefa }: Props) {
  return (
    <li
      className={`
        ${style.item} 
        ${selecionado && style.itemSelecionado} 
        ${completado && style.itemCompletado} `}
      onClick={() => !completado && selecionaTarefa({
        descricao,
        tempo,
        completado,
        selecionado,
        id
      })}
    >
      <h3>{descricao}</h3>
      <div>tempo : {tempo}</div>
      <div>id : {id}</div>
      <div>completado : {completado.toString()}</div>
      <div>selecionado : {selecionado.toString()}</div>
      { 
        completado && 
        <span className={style.concluido} aria-label="tarefa completada"/>
      }
    </li>
  )
}

export default Item
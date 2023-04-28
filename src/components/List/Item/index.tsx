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
    selecionaTarefa} : Props) {
  console.log("item atual: ", {descricao, tempo, completado, selecionado, id})
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
      onClick={() => selecionaTarefa({
        descricao,
        tempo,
        completado,
        selecionado,
        id})}
    >
      <h3>{descricao}</h3>
      <div>tempo : {tempo}</div>
      <div>id : {id}</div>
      <div>completado : {completado.toString()}</div>
      <div>selecionado : {selecionado.toString()}</div>
    </li>
  )
}

export default Item
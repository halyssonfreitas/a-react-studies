import style from './List.module.scss'
import Item from "./Item";
import { ITarefa } from '../../types/ITarefa';

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function List({ tarefas, selecionaTarefa }: Props){
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item
            key={item.id}
            {...item}
            selecionaTarefa={selecionaTarefa}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;
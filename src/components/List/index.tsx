import style from './List.module.scss'
import Item from "./Item";
import { ITarefa } from '../../types/ITarefa';

function List({ tarefas }: {tarefas: ITarefa[]}){
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;
import React from "react";
import style from './List.module.scss'
import Item from "./Item";

function List(){
  const tarefas = [{
    tarefa: 'React',
    tempo: '02:00:00'
  }, {
    tarefa: 'Java Script',
    tempo: '01:00:00'
  }, {
    tarefa: 'Type Script',
    tempo: '03:00:00'
  }]
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
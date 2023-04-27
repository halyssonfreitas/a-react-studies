import React from "react";

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
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <li key={index}>
            <h3>
              {item.tarefa}
            </h3>
            <span>
              {item.tempo}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default List;
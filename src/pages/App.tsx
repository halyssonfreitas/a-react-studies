import React, { useState } from 'react';
import Form from '../components/Form'
import List from '../components/List';
import style from './App.module.scss'
import Stopwatch from '../components/Stopwatch';
import { ITarefa } from '../types/ITarefa';

function App() {
  const [ tarefas, setTarefas] = useState<ITarefa[]>([])
  const [ selecionado, setSelecionado] = useState<ITarefa>()

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefas => tarefas.map(
      tarefa => ({
        ...tarefa,
        selecionado: selecionado?.id === tarefa.id ? true : false
      })
    ))
    
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Stopwatch/>
    </div>
  );
}

export default App;

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

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefas => tarefas.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ... tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Stopwatch 
      selecionado={selecionado}
      finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;

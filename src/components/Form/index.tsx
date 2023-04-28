import React from "react";
import Button from "../Button";
import style from './Form.module.scss'
import { ITarefa } from "../../types/ITarefa";

class Form extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
  state = {
    tarefa: "",
    tempo: "00:00"
  }

  adicionarTarefa(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}])
  }

  render(): React.ReactNode {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar ?"
            value={this.state.tarefa}
            onChange={event => this.setState({ ...this.state, tarefa: event.target.value })}
          />
        </div>
        <div className={style["inputContainer"]}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={event => this.setState({ ...this.state, tempo: event.target.value })}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button type="submit">
          Adicionar
        </Button>
      </form>
    )
  }
}

export default Form
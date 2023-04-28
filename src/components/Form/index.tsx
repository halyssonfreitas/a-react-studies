import React from "react";
import Button from "../Button";
import style from './Form.module.scss'
import { ITarefa } from "../../types/ITarefa";
import { v4 as uuidv4 } from "uuid";

class Form extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
  state = {
    descricao: "",
    tempo: "00:00"
  }

  adicionarTarefa(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    this.props.setTarefas(tarefasAntigas => 
      [
        ...tarefasAntigas,
        {
          ...this.state,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]
    )
    this.setState({
      descricao: "",
      tempo:"00:00"
    })
  }

  render(): React.ReactNode {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="descricao">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="descricao"
            id="descricao"
            placeholder="O que você quer estudar ?"
            value={this.state.descricao}
            onChange={event => this.setState({ ...this.state, descricao: event.target.value })}
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

function v4() {
  throw new Error("Function not implemented.");
}

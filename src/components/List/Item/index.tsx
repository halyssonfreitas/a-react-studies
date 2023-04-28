import React from "react";
import style from "./Item.module.scss"
import { ITarefa } from "../../../types/ITarefa";

function Item({tarefa, tempo, completado, selecionado, id} : ITarefa) {
  console.log("item atual: ", {tarefa, tempo, completado, selecionado, id})
  return (
    <li className={style.item}>
      <h3>
        {tarefa}
      </h3>
      <span>
        {tempo}
      </span>
    </li>
  )
}

export default Item
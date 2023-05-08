import React from "react";
import style from './Button.module.scss'

interface Props {
  children?: React.ReactNode,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}

function Button({ children, type, onClick }: Props) {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {children}
    </button>
  )
}

class Button1 extends React.Component<{
  children: string,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}> {
  render(): React.ReactNode {
    const { type = "button", onClick } = this.props
    return (
      <button type={type} className={style.botao} onClick={onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default Button
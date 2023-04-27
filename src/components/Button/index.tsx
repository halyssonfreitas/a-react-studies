import React from "react";

class Button extends React.Component {
  render(): React.ReactNode {
    const backgroundColor = 'green'
    const style = {
      backgroundColor
    }
    return (
      <button style={style}>
        Button
      </button>
    )
  }
}

export default Button
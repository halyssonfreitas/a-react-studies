import React from "react"
import style from "./Clock.module.scss"

function Clock() {
  return (
    <React.Fragment>
      <span className="clockNumber">0</span>
      <span className="clockNumber">0</span>
      <span className="clockDivision">:</span>
      <span className="clockNumber">0</span>
      <span className="clockNumber">0</span>
    </React.Fragment>
  )
}

export default Clock
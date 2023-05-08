import React from "react"
import style from "./Clock.module.scss"
import { formatTimeFromSeconds, getSeparetedElementsFromTime, getSeparetedElementsFromTimeOnlyMinutesAndSeconds } from "../../../common/utils/time"

interface Props {
  tempo: number | undefined
}

function Clock({ tempo = 0} : Props) {
  const {
    minuteDecimal,
    minuteUnit,
    secondDecimal,
    secondUnit
  } = getSeparetedElementsFromTimeOnlyMinutesAndSeconds(formatTimeFromSeconds(tempo));

  return (
    <React.Fragment>
      <span className="clockNumber">{minuteDecimal}</span>
      <span className="clockNumber">{minuteUnit}</span>
      <span className="clockDivision">:</span>
      <span className="clockNumber">{secondDecimal}</span>
      <span className="clockNumber">{secondUnit}</span>
    </React.Fragment>
  )
}

export default Clock
const Timer = (props) => {
  const { timer } = props

  return (
    <div className="timer-wrapper">
      <div className="timer">
        <div className="minutes">
          { timer }
        </div>
        <div className="separator">
          :
        </div>
        <div className="seconds">
          00
        </div>
      </div>
    </div>
  )
}

export default Timer

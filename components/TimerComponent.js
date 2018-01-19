const Timer = (props) => {

  return (
    <div className="timer-wrapper">
      <div className="timer">
        <div className="minutes">
          { props.timer }
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

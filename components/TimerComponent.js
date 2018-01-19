const Timer = (props) => {

  return (
    <div className="timer-wrapper">
      <div className="timer">
        <div className="minutes">
          { props.timer.minute }
        </div>
        <div className="separator">
          :
        </div>
        <div className="seconds">
          { props.timer.second }
        </div>
      </div>
    </div>
  )
}

export default Timer

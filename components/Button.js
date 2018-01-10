const Button = (props) => {
  const { startClock } = props

  return (
    <div className='button-wrapper'>
      <button className='button' onClick={ startClock }>
        Tap to start
      </button>
    </div>
  )
}

export default Button

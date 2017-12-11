const Button = () => {
  const onClick = () => {
    alert()
  }

  return (
    <div className="button-wrapper">
      <button className="button" onClick={ onClick }>
        Tap to start
      </button>
    </div>
  )
}

export default Button

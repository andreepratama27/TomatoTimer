import { Component } from 'react'

class ButtonComponent extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { onClick } = this.props

    return (
      <div className='button-wrapper'>
        <button className='button' onClick={ onClick }>
          Tap to start
        </button>
      </div>
    )
  }
}

export default ButtonComponent

import { Component } from 'react'
import NavbarComponent from './NavbarComponent'
import TimerComponent from './TimerComponent'
import ButtonComponent from './ButtonComponent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: {
        minute: 25,
        second: 59
      }
    }
  }

  startClock () {
    const countDown = setInterval(() => {
      this.setState({
        timer: {
          minute: 25,
          second: this.state.timer.second - 1
        }
      })

      if (this.state.timer.second === 0) {
        clearInterval(countDown)
      }
    }, 1000)
  }

  render() {
    const { timer } = this.state

    return (
      <div className='wrapper'>
        <NavbarComponent />
        <TimerComponent timer={ timer } />
        <ButtonComponent onClick={ this.startClock.bind(this) } />
      </div>
    )
  }
}

export default App

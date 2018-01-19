import { Component } from 'react'
import NavbarComponent from './NavbarComponent'
import TimerComponent from './TimerComponent'
import ButtonComponent from './ButtonComponent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 25
    }
  }

  startClock () {
    const { timer } = this.state

    setInterval(() => {
      this.setState({
        timer: this.state.timer - 1
      })
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

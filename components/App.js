import { Component } from 'react'
import Navbar from './Navbar'
import Timer from './Timer'
import Button from './Button'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: 25
    }
  }

  render() {

    return (
      <div className='wrapper'>
        <Navbar />
        <Timer {...this.state} />
        <Button />
      </div>
    )
  }
}

export default App

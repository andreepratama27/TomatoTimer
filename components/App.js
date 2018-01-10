import { Component } from 'react'
import Navbar from './Navbar'
import Timer from './Timer'
import Button from './Button'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='wrapper'>
        <Navbar />
        <Timer {...this.props} />
        <Button {...this.props} />
      </div>
    )
  }
}

export default App

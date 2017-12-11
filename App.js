import { Component } from 'react'
import Navbar from './components/Navbar'
import Timer from './components/Timer'
import Button from './components/Button'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='wrapper'>
        <Navbar />
        <Timer />
        <Button />
      </div>
    )
  }
}

export default App

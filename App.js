import { Component } from 'react'
import Navbar from './components/Navbar'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='wrapper'>
        <Navbar />
      </div>
    )
  }
}

export default App

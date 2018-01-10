import { connect } from 'react-redux'
import { addMinute } from 'Actions/'
import App from 'Components/App'

const mapStateToProps = state => ({
  timer: state.timer
})

const mapDispatchToProps = dispatch => ({
  startClock() {
    dispatch(addMinute())
  }
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer

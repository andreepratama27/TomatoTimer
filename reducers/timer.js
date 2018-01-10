const reducers = (state=25, action) => {
    switch(action.type) {
        case 'ADD_MINUTE': {
          console.log('helo')
        }

        default: {
            return state
        }
    }
}

export default reducers

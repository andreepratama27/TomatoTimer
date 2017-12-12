const reducers = (state=[], action) => {

    switch(action.type) {

        case 'ADD_MINUTE': {
          return [
            ...action.data
          ]
        }

        default: {
            return state
        }
    }
}

export default reducers

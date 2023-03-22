const initialState = 0

export default function appReducer(state = initialState, action: any) {
  switch (action) {
    case 'increment': {
      return state++
    }

    case 'decrement': {
      return state--
    }

    default:
      return state
  }
}

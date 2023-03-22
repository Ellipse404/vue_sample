export default function appReducer(state: any, action: string) {
  switch (action) {
    case 'increment': {
      return state.count++
    }

    case 'decrement': {
      return state.count--
    }

    default:
      return state.count
  }
}

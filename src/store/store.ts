import { createStore } from 'vuex'
import appReducer from './reducer'
import { ACTIONS } from './action'

export const store = createStore({
  state() {
    return {
      count: 0
    }
  },

  mutations: {
    increment(state) {
    //   state.count++
    appReducer(state, ACTIONS.INCREMENT)
    },

    decrement(state) {
    //   state.count--
    appReducer(state, ACTIONS.DECREMENT)

    }
  }
})

import { createStore } from 'vuex'
import common from './modules/common'

const store = createStore({
  modules: {
    common,
  },
})

export default store

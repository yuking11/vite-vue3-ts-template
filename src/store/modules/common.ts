import { reactive } from 'vue'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import { RootState } from '../types'

export type CommonState = {
  count: number
}

export const state = () => {
  return reactive<CommonState>({
    count: 0,
  })
}

export const getters: GetterTree<CommonState, RootState> = {
  getCount(state: CommonState): number {
    return state.count
  },
}

export const mutations: MutationTree<CommonState> = {
  setCount(state: CommonState, payload: number) {
    state.count = payload
  },
}

export const actions: ActionTree<CommonState, RootState> = {
  increment({ commit, state }) {
    if (state.count < 10) {
      commit('setCount', state.count + 1)
    }
  },
  decrement({ commit, state }) {
    if (state.count > 0) {
      commit('setCount', state.count - 1)
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}

import { defineStore } from 'pinia'

type CounterState = {
  count: number
}

export const useCounterStore = defineStore({
  id: 'counter',
  state: (): CounterState => ({
    count: 0,
  }),
  getters: {},
  actions: {
    clearCounter() {
      this.$reset()
    },
    increment() {
      if (this.count < 10) {
        this.count++
      }
    },
    decrement() {
      if (this.count > 0) {
        this.count--
      }
    },
  },
})

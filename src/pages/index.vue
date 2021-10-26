<script setup lang="ts">
import {
  // onBeforeMount,
  // onMounted,
  // onBeforeUpdate,
  // onUpdated,
  // onBeforeUnmount,
  // onUnmounted,
  // ref,
  // reactive,
  // toRefs,
  computed,
  // watch,
  // watchEffect,
  // Ref,
  // ComputedRef,
  // PropType,
} from 'vue'
import { useStore } from 'vuex'
import { useMeta } from 'vue-meta'
import HelloWorld from '~/components/HelloWorld.vue'

// set meta

useMeta({
  title: '',
  description: {
    content: `${import.meta.env.VITE_APP_NAME}のサイトです。`,
  },
})

// set data

const store = useStore()

const count = computed(() => store.state.common.count)

const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE

// methods

const onIncrement = () => {
  store.dispatch('common/increment')
}

const onDecrement = () => {
  store.dispatch('common/decrement')
}
</script>

<template>
  <div class="page-index">
    <img alt="Vue logo" src="@/assets/img/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <h3>{{ VITE_APP_TITLE }}</h3>
    <p>
      <router-link :to="{ name: 'About' }">About</router-link>
    </p>
    <div>
      store count: {{ count }}<br />
      <button type="button" @click="onIncrement">increment</button>
      <button type="button" @click="onDecrement">decrement</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-index {
  margin: auto;
}
</style>

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
import { useHead } from '@vueuse/head'
import { usePageMeta } from '~/composables/usePageMeta'
import HelloWorld from '~/components/HelloWorld.vue'

// set meta

const title = import.meta.env.VITE_APP_TITLE as string
const description = 'this is vite/vue3/typescript template.'

const siteMeta = usePageMeta(title, description, true)

useHead(siteMeta)

// set data

const store = useStore()

const count = computed(() => store.state.common.count)

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

<route>
{
  meta: {
    layout: "top"
  }
}
</route>

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
import { useCounterStore } from '~/stores/counter'
import { useHead } from '@vueuse/head'
import { usePageMeta } from '~/composables/usePageMeta'

// set meta

const title = import.meta.env.VITE_APP_TITLE as string
const description = 'this is vite/vue3/typescript template.'

const siteMeta = usePageMeta(title, description, true)

useHead(siteMeta)

// set data

const counterStore = useCounterStore()

const count = computed(() => counterStore.count)

// methods

const onIncrement = () => {
  counterStore.increment()
}

const onDecrement = () => {
  counterStore.decrement()
}
</script>

<template>
  <div class="page-index">
    store count: {{ count }}<br />
    <button type="button" @click="onIncrement">increment</button>
    <button type="button" @click="onDecrement">decrement</button>
  </div>
</template>

<style lang="scss" scoped>
.page-index {
  margin: auto;
}
</style>

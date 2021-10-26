<script setup lang="ts">
import { shallowRef } from 'vue'

// set props

const props = defineProps<{
  name: string
}>()

// set data

const svg = shallowRef('')

import(`../../assets/svg/${props.name}.svg`).then((val) => {
  svg.value = val.default
})
</script>

<template>
  <VueSvgIcon :data="svg" v-bind="$attrs" original />
</template>

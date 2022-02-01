<script setup lang="ts">
import { computed } from 'vue'

// set props

interface Props {
  prefix?: string
  name: string
  color?: string
  width?: number
  height?: number
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  color: '#212121',
  width: 32,
  height: 32,
})

// set data

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

const iconSize = computed(() => `--width: ${props.width}px; --height: ${props.height}px;`)
</script>

<template>
  <svg aria-hidden="true" class="svg-icon-component" :style="iconSize">
    <use :href="symbolId" :fill="props.color" />
  </svg>
</template>

<style lang="scss" scoped>
.svg-icon-component {
  --width: 32px;
  --height: 32px;

  width: var(--width);
  height: var(--height);
  vertical-align: middle;
}
</style>

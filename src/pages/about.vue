<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMeta } from 'vue-meta'
import { useStore } from 'vuex'
import SvgIcon from '~/components/modules/icons/SvgIcon.vue'

// set meta

const title = ref('about this site.')

useMeta({
  title: title.value,
  description: {
    content: `On this page, you will find information about ${import.meta.env.VITE_APP_NAME}.`,
  },
})

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
  <div class="page-about">
    <h2>About</h2>
    <h3>{{ title }}</h3>
    <div>
      <p>
        <SvgIcon name="info_outline" :width="24" :height="24" title="Information" />
        store count: {{ count }}
        <SvgIcon name="arrow_right" :width="24" :height="24" title="arrow" class="arrow-icon" />
      </p>
      <button type="button" @click="onIncrement">increment</button>
      <button type="button" @click="onDecrement">decrement</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-about {
  margin: auto;
  padding: math.div($base-space, 2);
  @include media-screen-tab {
    padding: $base-space;
  }
}

.arrow-icon ::v-deep(use) {
  fill: $base-neutral-color;
}
</style>

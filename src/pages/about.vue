<script setup lang="ts">
import { computed } from 'vue'
import { useMeta } from 'vue-meta'
import { useStore } from 'vuex'
import SvgIcon from '~/components/modules/SvgIcon.vue'

// set meta

useMeta({
  title: '当サイトについて',
  description: {
    content: `${import.meta.env.VITE_APP_NAME}について説明するページです。`,
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
  <div class="page-about">About</div>

  <p>
    <router-link :to="{ name: 'Index' }">Top</router-link>
  </p>
  <div>
    <SvgIcon :name="'info_outline'" width="24" height="24" title="Information" class="icon" />
    store count: {{ count }}<br />
    <button type="button" @click="onIncrement">increment</button>
    <button type="button" @click="onDecrement">decrement</button>
  </div>
  <div>
    <img src="@/assets/svg/info_outline.svg" alt="" />
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

.icon {
  fill: $base-neutral-color;
}
</style>

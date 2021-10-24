<template>
  <div class="page-about">About</div>

  <p>
    <router-link :to="{ name: 'Home' }">Home</router-link>
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

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useMeta } from 'vue-meta'
import { useStore } from 'vuex'
import SvgIcon from '~/components/modules/SvgIcon.vue'

export default defineComponent({
  name: 'About',
  components: {
    SvgIcon,
  },
  setup() {
    // set meta

    useMeta({
      title: '当サイトについて',
      description: {
        content: `${import.meta.env.VITE_APP_NAME}について説明するページです。`,
      },
    })

    const store = useStore()

    const count = computed(() => store.state.common.count)

    const onIncrement = () => {
      store.dispatch('common/increment')
    }
    const onDecrement = () => {
      store.dispatch('common/decrement')
    }

    return {
      count,
      onIncrement,
      onDecrement,
    }
  },
})
</script>

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

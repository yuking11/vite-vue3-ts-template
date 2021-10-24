<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | ${VITE_APP_TITLE}` : VITE_APP_TITLE
    }}</template>
    <template v-slot:description="{ content }">{{ content }}</template>
  </metainfo>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE

    return {
      VITE_APP_TITLE,
    }
  },
})
</script>

<style lang="scss">
@import '~/assets/css/default';
@import '~/assets/css/global';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

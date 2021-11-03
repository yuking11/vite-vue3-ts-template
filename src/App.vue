<script setup lang="ts">
// set data

const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE
const VITE_APP_NAME = import.meta.env.VITE_APP_NAME
</script>

<template>
  <metainfo>
    <template #title="{ content }">{{
      content ? `${content} | ${VITE_APP_TITLE}` : VITE_APP_TITLE
    }}</template>
    <template #description="{ content }">{{
      content ? content : `this is ${VITE_APP_NAME} web site.`
    }}</template>
  </metainfo>

  <div>
    <router-link :to="{ name: 'Index' }">Top</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import '~/assets/css/default';
@import '~/assets/css/global';

#app {
  text-align: center;
  margin-top: 60px;
}
</style>

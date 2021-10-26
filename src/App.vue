<script setup lang="ts">
// set data

const VITE_APP_TITLE = import.meta.env.VITE_APP_TITLE
</script>

<template>
  <metainfo>
    <template #title="{ content }">{{
      content ? `${content} | ${VITE_APP_TITLE}` : VITE_APP_TITLE
    }}</template>
    <template #description="{ content }">{{ content }}</template>
  </metainfo>
  <router-view />
</template>

<style lang="scss">
@import '~/assets/css/default';
@import '~/assets/css/global';

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script setup lang="ts">
import HelloWorld from '~/components/HelloWorld.vue'
</script>

<template>
  <div class="nav">
    <router-link :to="{ name: 'index' }">Top</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link>
  </div>
  <div>
    <img alt="Vue logo" src="@/assets/img/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </div>
  <router-view />
</template>

<style lang="scss" scoped>
.nav {
  text-align: center;
  margin-bottom: 10px;
}
</style>

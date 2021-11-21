<script setup lang="ts"></script>

<template>
  <div class="nav">
    <router-link :to="{ name: 'index' }">Top</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss" scoped>
.nav {
  text-align: center;
  margin-bottom: 10px;
}
</style>

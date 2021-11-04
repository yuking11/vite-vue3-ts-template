<script setup lang="ts"></script>

<template>
  <div>
    <router-link :to="{ name: 'index' }">Top</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link>
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

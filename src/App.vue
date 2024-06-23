<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <v-app id="inspire" app style="width: 100dvw;height: 100dvh">
    <v-main>
      <router-view>

      </router-view>
    </v-main>
  </v-app>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

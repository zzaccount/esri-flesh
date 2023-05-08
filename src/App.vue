<script setup>
import esriConfig from "@arcgis/core/config.js";
esriConfig.assetsPath = "./assets";
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
@import "@arcgis/core/assets/esri/themes/dark/main.css";
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

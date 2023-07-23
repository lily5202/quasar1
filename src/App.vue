<template>
  <router-view />
</template>

<script setup lang="ts">
console.log(process.env);
// Vite 在一个特殊的 import.meta.env 对象上暴露环境变量
console.log(import.meta.env);
</script>

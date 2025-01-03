<script setup lang="ts">
import { useColorScheme } from './store/colorTheme';

const cs = useColorScheme();
cs.switch("dark");
</script>

<template>
  <router-view :key="$route.fullPath" />
</template>

<style scoped>

</style>

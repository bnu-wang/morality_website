<script setup lang="ts">
import { useColorScheme } from './store/colorTheme';

const cs = useColorScheme();
cs.switch("dark");
</script>

<template>
  <router-view />
</template>

<style scoped>

</style>

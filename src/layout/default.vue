<script setup lang="ts">
import PC from "./pc.vue";
import PE from "./mobile.vue";
import { ref } from "vue";
import { onMounted } from "vue";
import { onUnmounted } from "vue";

const isMobile = ref(false);
const judgeDevice = () => { isMobile.value = window.innerWidth < 600; }
judgeDevice();
onMounted(() => { window.addEventListener("resize", judgeDevice); });
onUnmounted(() => { window.removeEventListener("resize", judgeDevice); });
</script>

<template>
    <PC v-if="!isMobile">
        <slot></slot>
    </PC>
    <PE v-else>
        <slot></slot>
    </PE>
</template>

<style scoped>

</style>
<script setup lang="ts">
import layout from "../../layout/default.vue";
import P1 from "./p1.vue";
import P2 from "./p2.vue";
import P3 from "./p3.vue";
</script>

<template>
    <layout>
        <P1></P1>
        <P2></P2>
        <P3></P3>
    </layout>
</template>

<style lang="css" scoped>
:deep(.cb) {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 100%;
    scroll-snap-align: start;
}
</style>
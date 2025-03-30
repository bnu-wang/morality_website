<script setup lang="ts">
import layout from "../../layout/default.vue";
import P1 from "./p1.vue";
import P2 from "./p2.vue";
import P3 from "./p3.vue";
import P4 from "./p4.vue";
</script>

<template>
    <layout>
        <P1></P1>
        <P2></P2>
        <P3></P3>
        <P4></P4>
    </layout>
</template>

<style scoped>
:deep(.para) {
    margin-bottom: 1rem;
}
</style>
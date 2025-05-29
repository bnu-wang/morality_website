<script setup lang="ts">
import layout from "../../layout/default.vue";
import P1 from "./p1.vue";
import P2 from "./p2.vue";
import P3 from "./p3.vue";
import P4 from "./p4.vue";
import P5 from "./p5.vue";
import P6 from "./p6.vue";
</script>

<template>
    <layout>
        <P5></P5>
        <P1></P1>
        <P2></P2>
        <P3></P3>
        <P4></P4>
        <P6></P6>
    </layout>
</template>

<style scoped>
:deep(.para) {
    margin-bottom: 1rem;
}
</style>
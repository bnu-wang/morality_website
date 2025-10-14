<script setup lang="ts">
import layout from "../../layout/default.vue";
import P1 from "./p1.vue";
import P2 from "./p2.vue";
import P21 from "./p21.vue";
import P22 from "./p22.vue";
import P3 from "./p3.vue";
import P31 from "./p31.vue";
import P32 from "./p32.vue";
import P33 from "./p33.vue";
import P4 from "./p4.vue";
</script>

<template>
    <layout>
        <P1></P1>
        <P2></P2>
        <P3></P3>
        <P4></P4>
        <P21></P21>
        <P22></P22>
        <P31></P31>
        <P32></P32>
        <P33></P33>
    </layout>
</template>

<style lang="css" scoped>
:deep(.container) {
    min-height: 100%;
    scroll-snap-align: start;
}
</style>
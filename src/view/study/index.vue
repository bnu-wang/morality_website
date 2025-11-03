<script setup lang="ts">
import layout from "../../layout/default.vue";
import P11 from "./p11.vue";
import P12 from "./p12.vue";
import P13 from "./p13.vue";
import P14 from "./p14.vue";
import P15 from "./p15.vue";
import P21 from "./p21.vue";
// import P22 from "./p22.vue";
import P23 from "./p23.vue";
import P31 from "./p31.vue";
import P32 from "./p32.vue";
import P33 from "./p33.vue";
</script>

<template>
    <layout>
        <P11></P11>
        <P12></P12>
        <P13></P13>
        <P14></P14>
        <P15></P15>
        <P21></P21>
        <P23></P23>
        <P31></P31>
        <P32></P32>
        <P33></P33>
    </layout>
</template>

<style lang="css" scoped>
:deep(.container) {
    min-height: calc(100% + 20px);
}
</style>
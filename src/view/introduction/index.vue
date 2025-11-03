<script setup lang="ts">
import layout from "../../layout/default.vue";
import P10 from "./p10.vue";
import P11 from "./p11.vue";
import P12 from "./p12.vue";
import P8 from "./p8.vue";
import P9 from "./p9.vue";
</script>

<template>
    <layout>
        <P8></P8>
        <P9></P9>
        <P10></P10>
        <P11></P11>
        <P12></P12>
    </layout>
</template>

<style scoped>
:deep(.para) {
    margin-bottom: 1rem;
}

:deep(.container) {
    min-height: calc(100% + 20px);
}
</style>
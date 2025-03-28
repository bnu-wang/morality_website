<script setup lang="ts">
import layout from "../../layout/default.vue";
import P1 from "./p1.vue";
</script>

<template>
    <layout>
        <P1></P1>
    </layout>
</template>

<style scoped>
.img {
    background-image: url("./assets/image/2025021602.png");
    margin: auto;
}

.size1 {
    width: 805px;
    height: 393px;
    background-size: contain;
}

.size2 {
    width: 935px;
    height: 412px;
    background-size: contain;
}
</style>
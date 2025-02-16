<script setup lang="ts">
import layout from "../../layout/default.vue";
import i1 from "../../assets/image/2025021601.png";
import i2 from "../../assets/image/2025021602.png";
</script>

<template>
    <layout>
        <div>
            <h1>Central topic of humanity and social sciences</h1>
            <div>
                <div class="img size1" :style="`--img: url(${i1})`"></div>
            </div>
        </div>
        <div>
            <h1>Three key scientific questions</h1>
            <div>
                <div class="img size2" :style="`--img: url(${i2})`"></div>
            </div>
        </div>
    </layout>
</template>

<style scoped>
.img {
    background-image: var(--img);
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
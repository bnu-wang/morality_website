<script setup lang="ts">
import layout from "../../layout/default.vue";
import i1 from "../../assets/image/2025021601.png";
import i2 from "../../assets/image/2025021602.png";
</script>

<template>
    <layout>
        <div class="para">
            <h1>Central topic of humanity and social sciences</h1>
            <div>
                <div class="img size1" :style="`--img: url(${i1})`"></div>
            </div>
        </div>
        <div class="para">
            <h1>Three key scientific questions</h1>
            <div>
                <div class="img size2" :style="`--img: url(${i2})`"></div>
            </div>
        </div>
    </layout>
</template>

<style scoped>
.para {
    box-shadow: 0px 0px 5px grey;
}

h1 {
    font-size: 2rem;
    padding: 25px 0 10px 0;
    background-image: linear-gradient(rgba(102, 109, 255, 1), rgba(102, 109, 255, 1)),
                      linear-gradient(rgba(102, 109, 255, 1), rgba(102, 109, 255, 1)),
                      linear-gradient(rgba(255, 161, 85, 1), rgba(255, 161, 85, 1)),
                      linear-gradient(rgba(102, 109, 255, 1), rgba(102, 109, 255, 1)),
                      linear-gradient(rgba(102, 109, 255, 1), rgba(102, 109, 255, 1));
    background-size: 25px 25px, 10px 11px, 18px 19px, 8px 8px, 10px 27px;
    background-position: 0px 0px, 100% 8px, 100% 0px, calc(100% - 18px) 0px, 100% 0px;
    background-repeat: no-repeat;
    font-weight: 600;
    line-height: 3rem;
}

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
<script setup lang="ts">
import layout from "../../layout/default.vue";
import StarNew from "./components/StarNew.vue";
</script>

<template>
    <layout>
        <div class="cb">
            <div class="container">
                <div class="a">
                    <p class="w">“Two things awe me most, the starry sky above me and the moral law within me.”</p>
                    <p class="r">——Kant</p>
                </div>
                <div class="b">
                    <StarNew></StarNew>
                </div>
                <div class="c">
                    <img :src="'./assets/image/2025101501.png'" alt="" srcset="">
                </div>
                <div class="d">
                    <ElButton>WangLab</ElButton>
                    <ElButton>YuLab</ElButton>
                    <ElButton>HuLab</ElButton>
                </div>
            </div>
        </div>
    </layout>
</template>

<style lang="css" scoped>
.cb {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
}
.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 10px;
}

.a {
    grid-column: 1 / 6;
    grid-row: 1 / 2;
    font-size: 32px;
}
.b {
    grid-column: 6 / 13;
    grid-row: 1 / 3;
}
.c {
    grid-column: 1 / 6;
    grid-row: 2 / 3;
}
.d {
    grid-column: 1 / 13;
    margin: 60px;
    text-align: center;
}

.a .r {
    text-align: right;
}

img {
    width: 100%;
    height: 100%;
}
</style>

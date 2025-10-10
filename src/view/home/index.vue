<script setup lang="ts">
import layout from "../../layout/default.vue";
import { ElButton } from "element-plus";

import Stars from "./components/stars.vue";
</script>

<template>
    <layout>
        <div class="container">
            <div class="tips">
                <div>
                    <p>“Two things awe me most, the starry sky above me and the moral law within me.”</p>
                    <p>——Kant</p>
                </div>
                <div>
                    <ElButton>WangLab</ElButton>
                    <ElButton>YuLab</ElButton>
                    <ElButton>HuLab</ElButton>
                </div>
            </div>
            <div style="grid-column: 7 / 13;"><Stars></Stars></div>
        </div>
    </layout>
</template>

<style scoped>
.container {
    display: grid;
    max-width: 900px;
    min-height: calc(100% - 60px);
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 10px;
}

.container > div {
    vertical-align: middle;
}

.container .tips {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-column: 1 / 5;
    font-size: 20px;
    line-height: 32px;
    font-weight: 700;
}
</style>
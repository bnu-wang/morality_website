<script setup lang="ts">
import layout from "../../layout/default.vue";
import { ElButton } from "element-plus";
import StarRing from "./components/StarRing.vue";

</script>

<template>
    <layout>
        <div class="container">
            <div class="bg">
                <StarRing></StarRing>
            </div>
            <div style="position: fixed; z-index: 2;">
                <div class="tips">
                    <div>
                        <p>“Two things awe me most, the starry sky above me and the moral law within me.”</p>
                        <p>——Kant</p>
                    </div>
                </div>
                <div class="tips">
                    <ElButton>WangLab</ElButton>
                    <ElButton>YuLab</ElButton>
                    <ElButton>HuLab</ElButton>
                </div>
            </div>
        </div>
    </layout>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    position: relative;
}

.container > div {
    display: flex;
    width: 100%;
    height: 70%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.container .tips {
    width: 300px;
    font-size: 20px;
    line-height: 32px;
    font-weight: 700;
}
.container .bg {
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}
</style>

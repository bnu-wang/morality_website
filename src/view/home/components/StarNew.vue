<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { Star, starConnectData, starNewData, starNewSharingData } from './data';

const dom = ref<HTMLCanvasElement>();

const stars: Array<Star> = [];
starNewData.forEach(item => {
    const instance = new Star(
        item.posX, 
        item.posY, 
        item.color,
        item.word,
        4, 15, 0
    );
    stars.push(instance);
});
starNewSharingData.forEach(item => {
    const instance = new Star(
        item.posX, 
        item.posY, 
        item.color,
        undefined,
        0, 10, 0
    );
    stars.push(instance);
});

let end_func = () => {};
function init() {
    if (!dom.value) return;
    dom.value.width = 698;
    dom.value.height = 454;
    const ctx = dom.value.getContext("2d");
    if (!ctx) return;

    let ani_id: number;
    function animate() {
        ani_id = window.requestAnimationFrame(animate);
        if (!dom.value) return;
        if (!ctx) return;
        ctx.clearRect(0, 0, dom.value.width, dom.value.height);
        starConnectData.forEach(i => {
            ctx.strokeStyle = "#ffffff40";
            ctx.beginPath();
            ctx.moveTo(starNewData[i[0]].posX, starNewData[i[0]].posY);
            ctx.lineTo(starNewData[i[1]].posX, starNewData[i[1]].posY);
            ctx.closePath();
            ctx.stroke();
        });
        stars.forEach((item) => {
            item.draw(ctx);
            item.update({
                x: item.pos.x,
                y: item.pos.y
            });
        });
    }
    animate();
    end_func = () => {
        cancelAnimationFrame(ani_id);
    }
}

onMounted(() => {
    init();
});
onUnmounted(() => {
    end_func();
});
</script>

<template>
    <canvas ref="dom"></canvas>
</template>

<style lang="css" scoped>
canvas {
    width: 100%;
}
</style>

<script setup lang="ts">
import PC from "./pc.vue";
import PE from "./mobile.vue";
import { ref, type Ref } from "vue";
import { onMounted } from "vue";
import { onUnmounted } from "vue";

class Star {
    private init_step = 0.1;
    private step = 0.1;
    constructor(
        private x: number, 
        private y: number, 
        private r: number,
        private angle: number
    ) {}

    public update({x, y}: {x: number, y: number}) {
        this.r += this.step;
        if (this.r >= 5) this.step = -1 * this.init_step;
        if (this.r <= 0) {
            this.x = x;
            this.y = y;
            this.r = 0;
            this.step = this.init_step;
        }
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = "#fff";
        ctx.strokeStyle = "#fff";

        ctx.beginPath();
        const spikes = 5; // 五角星
        const outerRadius = this.r;
        const innerRadius = this.r * 0.3;

        for (let i = 0; i < spikes; i++) {
            // Outer point
            const outerX = outerRadius * Math.cos((i * 2 * Math.PI / spikes) - Math.PI / 2);
            const outerY = outerRadius * Math.sin((i * 2 * Math.PI / spikes) - Math.PI / 2);
            
            // Inner point
            const innerX = innerRadius * Math.cos(((i + 0.5) * 2 * Math.PI / spikes) - Math.PI / 2);
            const innerY = innerRadius * Math.sin(((i + 0.5) * 2 * Math.PI / spikes) - Math.PI / 2);
            
            if (i === 0) {
                ctx.moveTo(outerX, outerY);
            } else {
                ctx.lineTo(outerX, outerY);
            }
            
            ctx.lineTo(innerX, innerY);
        }

        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}

const isMobile = ref(false);
const judgeDevice = () => {
    isMobile.value = window.innerWidth < 600;
    dom.value.width = window.innerWidth;
    dom.value.height = window.innerHeight;
}

let continue_f = true;
const stars: Array<Star> = [];
function init() {
    stars.splice(0, stars.length);
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * dom.value.width;
        const y = Math.random() * dom.value.height;
        const r = Math.random() * 5;
        stars.push(new Star(x, y, r, 0));
    }
    continue_f = true;
    window.requestAnimationFrame(frame);
}
function frame(t: number) {
    t = Math.ceil(t); // 当前时间, ms
    const ctx = dom.value.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, dom.value.width, dom.value.height);
    stars.forEach(item => {
        item.draw(ctx);
        item.update({
            x: Math.random() * dom.value.width,
            y: Math.random() * dom.value.height
        });
    });
    if (continue_f) window.requestAnimationFrame(frame);
}

const dom = ref() as Ref<HTMLCanvasElement>;
onMounted(() => {
    judgeDevice();
    window.addEventListener("resize", judgeDevice);
    init();
});
onUnmounted(() => {
    continue_f = false;
    window.removeEventListener("resize", judgeDevice);
});
</script>

<template>
    <div>
        <canvas ref="dom"></canvas>
        <component :is="isMobile ? PE : PC">
            <slot></slot>
        </component>
    </div>
</template>

<style scoped>
canvas {
    display: block;
    position: fixed;
    z-index: -1;
}

:deep(.el-header) {
    background-color: var(--el-bg-color);
}
</style>
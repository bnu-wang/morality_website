<script setup lang="ts">
import { onMounted } from 'vue';

const avators = [
    { img: "./assets/image/2025100701.png", q: "Trustworthiness", a: "Trustworthiness" },
    { img: "./assets/image/2025100702.png", q: "Siddhartha Gautama", a: "Compassion" },
    { img: "./assets/image/2025100703.png", q: "Kant", a: "Deontology" },
    { img: "./assets/image/2025100704.png", q: "King", a: "Rights" },
    { img: "./assets/image/2025100705.png", q: "Moses", a: "Sanctity" },
    { img: "./assets/image/2025100706.png", q: "Aquinas", a: "Intention" },
    { img: "./assets/image/2025100707.png", q: "Jesus", a: "Love" },
    { img: "./assets/image/2025100708.png", q: "Confucius", a: "Benevolence" },
    { img: "./assets/image/2025100709.png", q: "Plato", a: "Justice" },
    { img: "./assets/image/2025100710.png", q: "Beauvoir", a: "Equality" },
    { img: "./assets/image/2025100711.png", q: "Hume", a: "Emotion" },
].reverse();

onMounted(() => {
    const doms = document.querySelectorAll<HTMLDivElement>(".avator");
    setInterval(() => {
        doms.forEach((dom) => {
            const v = parseFloat(dom.style.getPropertyValue("--i"));
            const _v = v + 0.01;
            dom.style.setProperty("--i", (_v * 32 < 360 ? _v : 0).toString());
        });
    }, 1000 / 30);
});

const click = (e: MouseEvent) => {
    const dom: HTMLDivElement | null = e.target as HTMLDivElement | null;
    dom?.classList.add("activate");
};
</script>

<template>
    <div class="interaction-avator">
        <div class="star_ring">
            <div class="ele" style="background-image: url('./assets/image/2025052903.png');"></div>
            <div>
                <template v-for="(item, index) in avators">
                    <div class="avator" :style="`--i: ${index}; background-image: url(${item.img}); --q: '${item.q}'; --a: '${item.a}';`" @click.once="click"></div>
                </template>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.interaction-avator {
    display: block;
    width: 384px;
    height: 384px;
    margin: 0 auto;
    position: relative;
    color: grey;
}

.ele {
    width: 198px;
    height: 198px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateX(-75deg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    color: black;
}
.ele::after {
    content: "?";
    position: absolute;
    top: 50%;
    left: 70%;
    font: Arial;
    font-size: 72px;
    font-weight: 700;
}

.avator {
    width: 96px;
    height: 96px;
    position: absolute;
    top: 45%;
    left: 50%;
    transform-origin: center center;
    transform: translate(-50%, -50%) 
               rotate(calc(-32deg * var(--i))) 
               translate(-300px, 0px)
               rotate(calc(32deg * var(--i)))
               rotateX(-75deg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
}
.avator::before {
    content: var(--a);
    display: block;
    padding: 0 5px;
    background-color: #d9d9d9;
    text-align: center;
    color: black;
    font-size: 14px;
    line-height: 1.5em;
    border-radius: 5px;
    opacity: 0;
}
.avator::after {
    content: var(--q);
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
    color: #fff;
}
.avator.activate::before {
    opacity: 1;
}

.star_ring {
    transform-style: preserve-3d;
    transform: translateY(150px) perspective(1000px) rotateX(75deg);
}
.star_ring > div {
    transform-style: preserve-3d;
}
</style>

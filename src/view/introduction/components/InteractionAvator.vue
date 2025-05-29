<script setup lang="ts">
const avators = [
    { img: "./assets/image/2025032902.png", q: "Buddhism", a: "Compassion" },
    { img: "./assets/image/2025032903.jpg", q: "Plato", a: "Justice" },
    { img: "./assets/image/2025032904.png", q: "Confucianism", a: "Benevolence" },
    { img: "./assets/image/2025032905.png", q: "Sartre", a: "Liberty" },
    { img: "./assets/image/2025032906.png", q: "Kant", a: "Duty" }
].reverse();

const click = (e: MouseEvent) => {
    const dom: HTMLDivElement | null = e.target as HTMLDivElement | null;
    dom?.classList.add("activate");
};
</script>

<template>
    <div class="interaction-avator">
        <div class="text">
            <p>Do you know what morality is in the eyes of philosophers and religious scriptures?</p>
            <p>Click on the avatar to reveal the answer.</p>
        </div>
        <div class="ele" style="background-image: url('./assets/image/2025052903.png');"></div>
        <template v-for="(item, index) in avators">
            <div class="avator" :style="`--i: ${index}; background-image: url(${item.img}); --q: '${item.q}'; --a: '${item.a}';`" @click.once="click"></div>
        </template>
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

.interaction-avator .text {
    display: block;
    width: 55%;
    font-size: 12px;
}

.ele {
    width: 198px;
    height: 198px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    transform-origin: center center;
    transform: translate(-50%, -50%) 
               rotate(calc(-60deg * var(--i))) 
               translate(-160px, 0px)
               rotate(calc(60deg * var(--i)));
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
    color: black;
}
.avator.activate::before {
    opacity: 1;
}

@media screen and (max-width: 400px) {
    .interaction-avator {
        transform-origin: 0 0;
        transform: scale(0.8);
    }
}
</style>

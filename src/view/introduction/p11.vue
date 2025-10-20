<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="a">
            <h1><strong>Our opinion: </strong><br />Universal coordinates space, Culturally-tuned weights</h1>
            <p>We hypothesize that human communities share a common conceptual scaffold for morality, but locate specific moral actions differently within that scaffold.</p>
        </div>
        <div class="b">
            <div class="icon">
                <img :src="'./assets/image/2025100715.png'" alt="">
            </div>
        </div>
        <div class="c">
            <img :src="`./assets/image/2025100714.png`" alt="" srcset="">
        </div>
        <div class="d">
            <strong>Universality</strong> lies in cognitive and computational machinery: all humans share an architecture for organizing and evaluating moral actions. The analogy to language is instructive: just as all humans possess the capacity for language acquisition, so too they share a framework for morality.
        </div>
        <div class="e">
            <strong>Diversity</strong> emerges at the level of cultural input and implementation. Local physical and social environments supply the content that tunes this shared machinery. Thus, communities may share a common scaffold for morality, yet place specific moral actions differently within it. 
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 100px;
    font-family: "PingFang SC";
    font-weight: 300;
}

.a { grid-column: 1 / 8; }
.b { grid-column: 8 / 13; }
.c {
    grid-column: 1 / 13;
    margin: 40px 0;
}
.d, .e {
    grid-column: span 6;
    text-align: justify;
    margin: 0 0 50px 0;
    font-size: 26px;
    line-height: 1.5em;
}

.a h1 {
    display: inline-block;
    font-size: 40px;
    line-height: 48px;
    vertical-align: middle;
}
.a h1 strong {
    font-size: 50px;
}
.a p {
    padding: 12px;
    border: solid 1px #fff;
    border-radius: 25px;
    font-size: 30px;
    line-height: 45px;
}
.b .icon {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    box-sizing: border-box;
}
.b .icon img {
    width: 100%;
}

img {
    width: 100%;
}
</style>

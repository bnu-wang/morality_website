<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="a">
            <div class="icon">
                <img :src="'./assets/image/2025100715.png'" alt="">
            </div>
            <h1><strong>Our opinion: </strong><br />Universal coordinates space, Culturally-tuned weights</h1>
        </div>
        <div class="b">
            <p>We hypothesize that human communities share a common conceptual scaffold for morality, but locate specific moral actions differently within that scaffold.</p>
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
    grid-column-gap: 40px;
}

.a, .b, .c {
    grid-column: 1 / 13;
}
.d, .e {
    grid-column: span 6;
    text-align: justify;
}

.a .icon {
    display: inline-block;
    width: 180px;
    height: 180px;
    margin: 0 64px 0 0;
    background-image: var(--url);
    background-size: cover;
    background-repeat: no-repeat;
    vertical-align: middle;
}
.a .icon img {
    width: 100%;
}
.a h1 {
    display: inline-block;
    width: calc(100% - 320px);
    font-size: 36px;
    line-height: 48px;
    vertical-align: middle;
}

.b p {
    padding: 35px;
    border: solid 1px #fff;
    border-radius: 25px;
    font-size: 24px;
    line-height: 32px;
}

img {
    width: 100%;
    height: 100%;
}
</style>

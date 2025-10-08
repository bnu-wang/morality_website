<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="title">
            <h1>Future plan on contemporary exploration</h1>
        </div>
        <div class="a">
            <img :src="'./assets/image/2025100717.png'" alt="" srcset="">
        </div>
        <div class="b">
            <p class="title">18 Global Countries (<span style="color: #FF7F50;">n = 10,800</span>)</p>
            <p class="desc">We plan to collect moral judgment data from participants in 18 culturally diverse countries across five continents and in 11 languages collectively representing more than half of the world’s population.</p>
        </div>
        <div class="c">
            <p class="title">Underlying Mechanisms<br/>for Regional Differences</p>
            <p class="desc">To explain differences in moral conceptual space across regions, we draw on variables from a multinational database covering cultural, economic, and ecological domains.</p>
        </div>
        <div class="d">
            <img :src="'./assets/image/2025100718.png'" alt="">
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 10px;
}

.title {
    grid-column: 1 / 13;
}
.a, .b {
    grid-column: span 6;
}
.c {
    grid-column: 2 / 6;
}
.d {
    grid-column: 7 / 13;
}

.a img, .d img {
    width: 100%;
    height: 100%;
}
.b .title, .c .title {
    font-size: 32px;
    line-height: 48px;
    font-weight: 700;
}
.b .desc, .c .desc {
    font-size: 22px;
    line-height: 32px;
    text-align: justify;
}
</style>

<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="title">
            <h2>Stable SIS model</h2>
        </div>
        <div class="l">
            <h3>⭐ Model validation across analytical methods</h3>
            <p class="w"><span>PCA & EFA:</span> Spearman’s correlations of moral action scores across methods remained relatively high (all r > 0.98, P < 0.001), the model seems to be very stable and generalizable across analytical techniques. The significance of PCA scores was determined using a two-tailed test.</p>
            <img :src="'./assets/image/2025100813.png'" alt="" srcset="">
            <h3>⭐ Model validation across online platforms</h3>
            <p class="w"><span>Recruited participants via Prolific (n = 870):</span> Spearman’s correlation of moral action scores across different platforms remained relatively high (all r > 0.53, P < 0.001), indicating that the model can be replicated across online platforms. The significance of PCA scores was determined using a two-tailed test.</p>
            <img :src="'./assets/image/2025100814.png'" alt="" srcset="">
        </div>
        <div class="r">
            <img :src="'./assets/image/2025100811.png'" alt="" srcset="">
            <img :src="'./assets/image/2025100812.png'" alt="" srcset="">
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 70px;
}

.title {
    grid-column: 2 / 12;
    text-align: center;
}
.l {
    grid-column: 2 / 8;
}
.r {
    grid-column: 8 / 13;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.w {
    font-size: 20px;
    line-height: 28px;
    text-align: justify;
}
.w span {
    font-size: 24px;
    font-weight: bold;
}

img {
    width: 100%;
}
</style>

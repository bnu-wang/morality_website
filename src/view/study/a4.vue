<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="title">
            <h2>PCA loadings in China</h2>
        </div>
        <div class="m">
            <p class="w">⭐ PCA loadings on 60 features for evil and good actions in the China.</p>
        </div>
        <div class="b">
            <img :src="'./assets/image/2025100815.png'" alt="" srcset="">
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
    grid-column: 2 / 12;
    text-align: center;
}
.m {
    grid-column: 2 / 12;
    text-align: center;
}
.b {
    grid-column: 2 / 12;
}

.w {
    font-size: 24px;
    line-height: 1.5em;
}

img {
    width: 100%;
}
</style>

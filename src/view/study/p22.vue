<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="title">
            <h3>Which aspects are prioritized when judging moral right and wrong in the USA and CHN?</h3>
        </div>
        <div class="m">
            <img :src="'./assets/image/2025100104.png'" alt="" srcset="">
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
    font-size: 22px;
}

.title, .m {
    grid-column: 1 / 13;
    text-align: center;
}

img {
    width: 100%;
}
</style>

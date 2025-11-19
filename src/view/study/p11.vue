<script setup lang="ts">
import LazyImage from '../../components/LazyImage.vue';
</script>

<template>
    <div id="study1" class="container">
        <div class="title">
            <h1>Humans use the SIS model to navigate the moral space.</h1>
        </div>
        <div class="a">
            <LazyImage :src="'./assets/image/2025100731new.png'" alt=""></LazyImage>
        </div>
    </div>
</template>

<style lang="css" scoped>
#study1 {
    scroll-margin-top: 80px; /* 为滚动留出顶部空�?*/
}

.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 10px;
    font-size: 22px;
}

.title, .a {
    display: block;
    grid-column: 1 / 13;
    text-align: center;
}

.title h1 {
    font-weight: bold;
}
.a :deep(.lazy-image-wrapper) {
    width: 85%;
}

/* 移动端适配 */
@media (max-width: 600px) {
    .container {
        grid-column-gap: 5px;
        font-size: 14px;
        padding: 0 15px;
    }

    .title h1 {
        font-size: 18px;
        line-height: 1.4em;
        margin: 15px 0;
    }

    .a :deep(.lazy-image-wrapper) {
        width: 100%;
    }
}
</style>


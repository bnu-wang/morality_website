<script setup lang="ts">
import LazyImage from '../../components/LazyImage.vue';
</script>

<template>
    <div class="container">
        <div class="title">
            <h1>Materials: A comprehensive sample of moral actions</h1>
        </div>
        <div class="a">
            <LazyImage :src="'./assets/image/2025102102new.png'" alt=""></LazyImage>
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

.title, .a {
    grid-column: 1 / 13;
}

.title {
    text-align: center;
}

.title h1 {
    font-weight: bold;
}
.a :deep(img) {
    width: 100%;
    margin: 15px 0;
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

    .a :deep(img) {
        margin: 10px 0;
    }
}
</style>

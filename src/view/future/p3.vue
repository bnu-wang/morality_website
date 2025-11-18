<script setup lang="ts">
import LazyImage from '../../components/LazyImage.vue';
</script>

<template>
    <div class="cb">
        <div class="container">
            <div class="title">
                <h1>Far-reaching implication</h1>
            </div>
            <div class="img">
                <LazyImage :src="'./assets/image/2025100730.png'" alt=""></LazyImage>
            </div>
            <div class="desc">
                <p>Our work holds far-reaching implications—from advancing our understanding of morality's origins in
                    primates and its development in children, to guiding the creation of AI systems that align with core
                    human values.</p>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-rows: min-content;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 10px;
    font-size: 24px;
}

.title {
    grid-column: 1 / 13;
    text-align: center;
}

.title h1 {
    font-size: 40px;
    line-height: 56px;
    font-weight: 700;
}

.img,
.desc {
    grid-column: 1 / 13;
}

.img :deep(img) {
    width: 100%;
}

.desc p {
    font-size: 30px;
    line-height: 42px;
    padding: 20px 60px;
}

/* 移动端适配 */
@media (max-width: 600px) {
    .container {
        grid-column-gap: 5px;
        font-size: 14px;
        padding: 0 15px;
    }

    .title h1 {
        font-size: 20px;
        line-height: 1.4em;
        margin: 15px 0;
    }

    .desc p {
        font-size: 14px;
        line-height: 1.6em;
        padding: 15px 0;
    }
}
</style>

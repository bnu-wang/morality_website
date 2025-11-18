<script setup lang="ts">
import LazyImage from '../../components/LazyImage.vue';
</script>

<template>
    <div id="study3" class="container">
        <div class="title">
            <h2>Study3: Universal structure of morality across histories</h2>
        </div>
        <div class="m">
            <LazyImage :src="'./assets/image/2025100105.png'" alt=""></LazyImage>
            <p>How do we know if our modern ideas of "good" and "evil" are the same as those held by people centuries ago?</p>
            <p>
                We developed a context-referent labeling (CRL) approach. Instead of simulating ancient human raters, we instructed LLMs to evaluate actions based explicitly on historical context. Each action was rated using descriptive texts provided for reference.
            </p>
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
    font-size: 24px;
}

.title {
    grid-column: 1 / 13;
    text-align: center;
}

.title h2 {
    font-weight: bold;
    font-size: 42px;
}
.m {
    grid-column: 1 / 13;
    line-height: 1.5em;
}

:deep(img) {
    width: 100%;
}

/* 移动端适配 */
@media (max-width: 600px) {
    .container {
        grid-column-gap: 5px;
        font-size: 14px;
        padding: 0 15px;
    }

    .title h2 {
        font-size: 18px;
        line-height: 1.4em;
        margin: 15px 0;
    }

    .m {
        font-size: 14px;
        line-height: 1.6em;
    }

    .m p {
        font-size: 14px;
        line-height: 1.6em;
    }
}
</style>

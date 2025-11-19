<script setup lang="ts">
import LazyImage from '../../components/LazyImage.vue';
</script>

<template>
    <div class="container">
        <div class="title">
            <h2>Stable SIS model</h2>
        </div>
        <div class="l">
            <h3>⭐ Model validation across analytical methods</h3>
            <p class="w"><span>PCA & EFA:</span> Spearman's correlations of moral action scores across methods remained relatively high (all r > 0.98, P < 0.001), the model seems to be very stable and generalizable across analytical techniques. The significance of PCA scores was determined using a two-tailed test.</p>
            <LazyImage :src="'./assets/image/2025100813.png'" alt=""></LazyImage>
            <LazyImage :src="'./assets/image/2025100811.png'" alt="" className="mobile-img-2025100811"></LazyImage>
            <h3>⭐ Model validation across online platforms</h3>
            <p class="w"><span>Recruited participants via Prolific (n = 870):</span> Spearman's correlation of moral action scores across different platforms remained relatively high (all r > 0.53, P < 0.001), indicating that the model can be replicated across online platforms. The significance of PCA scores was determined using a two-tailed test.</p>
            <LazyImage :src="'./assets/image/2025100814.png'" alt=""></LazyImage>
        </div>
        <div class="r">
            <LazyImage :src="'./assets/image/2025100811.png'" alt="" className="pc-img-2025100811"></LazyImage>
            <LazyImage :src="'./assets/image/2025100812.png'" alt=""></LazyImage>
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

:deep(img) {
    width: 100%;
}

/* PC端：隐藏移动端的图片，显示PC端的原图 */
:deep(img.mobile-img-2025100811) {
    display: none;
}

/* 移动端适配 */
@media (max-width: 600px) {
    .container {
        grid-column-gap: 5px;
        padding: 0 15px;
    }

    .title {
        grid-column: 1 / 13;
        margin-bottom: 15px;
    }

    .title h2 {
        font-size: 18px;
        line-height: 1.4em;
    }

    .l {
        grid-column: 1 / 13;
        margin-bottom: 15px;
    }

    .r {
        grid-column: 1 / 13;
        margin-bottom: 15px;
    }

    h3 {
        font-size: 16px;
        line-height: 1.4em;
        margin: 10px 0;
    }

    .w {
        font-size: 14px;
        line-height: 1.6em;
    }

    .w span {
        font-size: 16px;
    }

    /* 移动端：显示移动端的图片，隐藏PC端的原图 */
    :deep(img.mobile-img-2025100811) {
        display: block;
    }

    :deep(img.pc-img-2025100811) {
        display: none;
    }
}
</style>

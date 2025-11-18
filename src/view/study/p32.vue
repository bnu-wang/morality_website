<script setup lang="ts">
import LazyImage from '../../components/LazyImage.vue';
</script>

<template>
    <div class="container">
        <div class="title">
            <h2 style="text-align: center;font-weight: 400;">
                SIS model can be replicated in ancient times
            </h2>
        </div>
        <div class="left">
            <LazyImage :src="'./assets/image/2025100106.png'" alt=""></LazyImage>
            <p>
                The connection between these maps is incredibly strong. Corresponding dimensions were show significantly correlations (evil: r > 0.79, P < 0.001; good: r > 0.74, P < 0.001).
            </p>
            <p>
                This powerful alignment suggests one compelling conclusion: despite the vast passage of time, a shared moral framework has endured in Chinese culture, connecting the past to the present.
            </p>
        </div>
        <div class="right">
            <p>
                PCA identified the three shared dimensions for both evil and good actions in ancient China.
            </p>
            <LazyImage :src="'./assets/image/2025100107.png'" alt=""></LazyImage>
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
    font-size: 24px;
    line-height: 1.5em;
}

.title {
    grid-column: 1 / 13;
    text-align: center;
}

.title h2 {
    font-weight: bold;
}
.left {
    grid-column: 1 / 7;
}
.right {
    grid-column: 7 / 13;
}

:deep(img) {
    width: 100%;
}

/* 移动端适配 */
@media (max-width: 600px) {
    .container {
        grid-column-gap: 20px;
        font-size: 14px;
        line-height: 1.5em;
        padding: 0 15px;
    }

    .title h2 {
        font-size: 18px !important;
        line-height: 1.4em;
        margin: 15px 0;
    }

    .left {
        grid-column: 1 / 13;
        margin-bottom: 20px;
    }

    .right {
        grid-column: 1 / 13;
    }

    .left p,
    .right p {
        font-size: 14px;
        line-height: 1.6em;
    }
}
</style>

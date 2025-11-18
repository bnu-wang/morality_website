<script setup lang="ts">
import LazyImage from '../../components/LazyImage.vue';
</script>

<template>
    <div class="container">
        <div class="title">
            <h2>Selection of optimal number of PCA components</h2>
        </div>
        <div class="p1">
            <h3>⭐ Method 1: </h3>
            <p class="w">
                Scree plots illustrating the results of data-driven metrics, including parallel analysis, the Kaiser-Guttman rule, Cattell's scree test, and optimal coordinates for evil and good actions. 
            </p>
        </div>
        <div class="p2">
            <LazyImage :src="'./assets/image/2025100807.png'" alt=""></LazyImage>
        </div>
        <div class="p3">
            <LazyImage :src="'./assets/image/2025100808.png'" alt=""></LazyImage>
        </div>
        <div class="p4">
            <h3>⭐ Method 2: </h3>
            <p class="w">
                We performed 1,000 bootstrap resampling iterations to evaluate the stability of the dimensionality reduction results. For each resampled dataset, we applied PCA and compared the resulting PCA loadings with those obtained from the entire dataset using cosine similarity. A higher value indicates greater stability of the dimensionality reduction outcome. 
            </p>
        </div>
        <div class="p5">
            <LazyImage :src="'./assets/image/2025100809.png'" alt=""></LazyImage>
        </div>
        <div class="p6">
            <LazyImage :src="'./assets/image/2025100810.png'" alt=""></LazyImage>
        </div>
        <div class="p7">
            <strong>All results revealed that the optimal number of PCA was 3 !!!</strong>
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
.p1 {
    grid-column: 2 / 6;
}
.p2 {
    grid-column: 6 / 9;
}
.p3 {
    grid-column: 9 / 12;
}
.p4 {
    grid-column: 2 / 12;
}
.p5 {
    grid-column: 2 / 7;
}
.p6 {
    grid-column: 7 / 12;
}
.p7 {
    grid-column: 2 / 12;
    text-align: center;
    font-size: 24px;
}

.w {
    font-size: 22px;
    line-height: 28px;
}

:deep(img) {
    width: 100%;
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

    .p1 {
        grid-column: 1 / 13;
        margin-bottom: 15px;
    }

    .p2 {
        grid-column: 1 / 13;
        margin-bottom: 15px;
    }

    .p3 {
        grid-column: 1 / 13;
        margin-bottom: 20px;
    }

    .p4 {
        grid-column: 1 / 13;
        margin-bottom: 15px;
    }

    .p5 {
        grid-column: 1 / 13;
        margin-bottom: 15px;
    }

    .p6 {
        grid-column: 1 / 13;
        margin-bottom: 15px;
    }

    .p7 {
        grid-column: 1 / 13;
        font-size: 16px;
        line-height: 1.4em;
    }

    .p1 h3, .p4 h3 {
        font-size: 16px;
        line-height: 1.4em;
        margin: 10px 0;
    }

    .w {
        font-size: 14px;
        line-height: 1.6em;
    }
}
</style>

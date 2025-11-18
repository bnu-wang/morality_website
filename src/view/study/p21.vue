<script setup lang="ts">
import { ref } from 'vue';
import A4 from './a4.vue';
import LazyImage from '../../components/LazyImage.vue';

const showDrawer = ref(false);
</script>

<template>
    <div id="study2" class="container">
        <div class="title">
            <h2>Study2: Universal structure of morality across cultures</h2>
        </div>
        <div class="left">
            <h3>PCA: USA-China Shared Space & Loadings</h3>
            <LazyImage :src="'./assets/image/2025100101.png'" alt=""></LazyImage>
            <p>The 18 countries from which nationally representative online samples are planned to be recruited. Pilot data were collected from China (n = 2,149)</p>
            <LazyImage :src="'./assets/image/2025100102.png'" alt=""></LazyImage>
        </div>
        <div class="right">
            <LazyImage :src="'./assets/image/2025100103.png'" alt=""></LazyImage>
            <p>High concordance of PCA scores (lower left triangle) and Tucker's congruence of PCA loadings (upper right triangle) indicates a shared conceptual space between the US and China.</p>
            <p style="text-align: right; text-decoration: underline; font-weight: bolder;" @click="showDrawer = true">Read more—</p>
        </div>
        <el-drawer v-model="showDrawer"
            direction="btt"
            size="80%">
            <A4></A4>
        </el-drawer>
    </div>
</template>

<style lang="css" scoped>
#study2 {
    scroll-margin-top: 80px; /* 为滚动留出顶部空间 */
}

.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 70px;
    font-size: 22px;
}

.title {
    display: block;
    grid-column: 1 / 13;
    text-align: center;
}

.title h2 {
    font-weight: bold;
    font-size: 42px;
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
        padding: 0 15px;
    }

    .title h2 {
        font-size: 18px;
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

    .left h3 {
        font-size: 16px;
        line-height: 1.4em;
    }

    .left p,
    .right p {
        font-size: 14px;
        line-height: 1.5em;
    }
}
</style>

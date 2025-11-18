<script setup lang="ts">
import { ref } from 'vue';
import InteractionPlot from './components/interactionPlot.vue';
import A2 from './a2.vue';
import A3 from './a3.vue';
import LazyImage from '../../components/LazyImage.vue';

const showDrawer1 = ref(false);
const showDrawer2 = ref(false);
</script>

<template>
    <div class="container">
        <div class="title">
            <h2>Study1: Initial validation of the Societal-Interpersonal-Self (SIS) model</h2>
        </div>
        <div class="a">
            <p style="word-break: break-all;">A large-scale survey (n = 1,415) asked U.S. participants to rate a wide range of good and evil actions. </p>
            <LazyImage :src="'./assets/image/2025100738.png'" alt=""></LazyImage>
            <p>Using <strong>principal component analysis (PCA)</strong>, we identified three key dimensions for each moral domain. </p>
            <InteractionPlot></InteractionPlot>
        </div>
        <div class="b">
            <LazyImage :src="'./assets/image/2025100739.png'" alt=""></LazyImage>
            <div class="b-box">
                <el-button @click="showDrawer1 = true">PCA Component Selection</el-button>
                <el-button @click="showDrawer2 = true">Stable SIS model </el-button>
            </div>
        </div>
        <el-drawer v-model="showDrawer1"
            direction="btt"
            size="80%">
            <A2></A2>
        </el-drawer>
        <el-drawer v-model="showDrawer2"
            direction="btt"
            size="80%">
            <A3></A3>
        </el-drawer>
    </div>
</template>

<style lang="css" scoped>
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
}
.a {
    grid-column: 1 / 7;
}
.b {
    grid-column: 7 / 13;
}

.b :deep(img) {
    max-height: 918px;
    margin-top: 24px;
    width: auto;
    object-fit: contain;
}

.b-box {
    text-align: center;
}
.b-box .el-button {
    background-color: rgba(79, 86, 255, 1);
    min-width: 258px;
}

.b-box .el-button:first-child {
    margin-left: -6%;
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

    .title {
        grid-column: 1 / 13;
    }

    .title h2 {
        font-size: 18px;
        line-height: 1.4em;
        margin: 15px 0;
    }

    .a {
        grid-column: 1 / 13;
        margin-bottom: 20px;
    }

    .b {
        grid-column: 1 / 13;
    }

    .a p {
        font-size: 14px;
        line-height: 1.5em;
    }

    .b :deep(img) {
        max-height: none;
        margin-top: 15px;
        width: 100%;
        height: auto;
        object-fit: contain;
    }

    .b-box .el-button {
        min-width: 150px;
        font-size: 12px;
        padding: 10px 15px;
    }

    .b-box .el-button:first-child {
        margin-left: 0;
        margin-bottom: 10px;
    }

    .b-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
}
</style>

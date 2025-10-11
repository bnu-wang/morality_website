<script setup lang="ts">
import { ref } from 'vue';
import InteractionPlot from './components/interactionPlot.vue';
import A2 from './a2.vue';
import A3 from './a3.vue';

const showDrawer1 = ref(false);
const showDrawer2 = ref(false);
</script>

<template>
    <div class="container">
        <div class="title">
            <h2>Study1: Initial validation of the Societal-Interpersonal-Self (SIS) model</h2>
        </div>
        <div class="a">
            <p>A large-scale survey (n = 1,415) asked U.S. participants to rate a wide range of good and evil actions. </p>
            <img :src="'./assets/image/2025100738.png'" alt="" srcset="">
            <p>Using <strong>principal component analysis (PCA)</strong>, we identified three key dimensions for each moral domain. </p>
            <InteractionPlot></InteractionPlot>
        </div>
        <div class="b">
            <img :src="'./assets/image/2025100739.png'" alt="" srcset="">
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
.a {
    grid-column: 1 / 7;
}
.b {
    grid-column: 7 / 13;
}

img {
    width: 100%;
}
</style>

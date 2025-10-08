<script setup lang="ts">
import InteractionPlot from './components/interactionPlot.vue';
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
                <el-button>PCA Component Selection</el-button>
                <el-button>Stable SIS model </el-button>
            </div>
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
    display: block;
    grid-column: 3 / 11;
    text-align: center;
}
.a, .b {
    grid-column: span 6;
}

img {
    width: 100%;
}
</style>

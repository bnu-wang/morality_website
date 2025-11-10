<script setup lang="ts">
import { ref } from 'vue';
import A4 from './a4.vue';

const showDrawer = ref(false);
</script>

<template>
    <div class="container">
        <div class="title">
            <h2>Study2: Universal structure of morality across cultures</h2>
        </div>
        <div class="left">
            <h3>PCA: USA-China Shared Space & Loadings</h3>
            <img :src="'./assets/image/2025100101.png'" alt="" srcset="">
            <p>The 18 countries from which nationally representative online samples are planned to be recruited. Pilot data were collected from China (n = 2,149)</p>
            <img :src="'./assets/image/2025100102.png'" alt="" srcset="">
        </div>
        <div class="right">
            <img :src="'./assets/image/2025100103.png'" alt="" srcset="">
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



img {
    width: 100%;
}
</style>

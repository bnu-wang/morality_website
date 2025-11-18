<script setup lang="ts">
import { ref } from 'vue';
import CustomButton from '../../components/customButton.vue';
import LazyImage from '../../components/LazyImage.vue';

const showDrawer1 = ref(false);
const showDrawer2 = ref(false);
</script>

<template>
    <div class="container">
        <h1 id="study2">Study2: Universal structure of morality across cultures</h1>
        <p>To test whether the conceptual space of morality is universal, we have collected data in China (N = 2,031).</p>
        <div class="box1">
            <LazyImage :src="'./assets/image/2025052908.png'" alt=""></LazyImage>
            <div class="button">
                <CustomButton @click="showDrawer1 = true">Shared structure</CustomButton>
                <CustomButton @click="showDrawer2 = true">Divergent geometries</CustomButton>
                <p> Click on each box to explore more</p>
            </div>
        </div>
    </div>
    <el-drawer v-model="showDrawer1"
               direction="btt"
               size="80%">
        <LazyImage :src="'./assets/image/2025052907.png'" alt=""></LazyImage>
    </el-drawer>
    <el-drawer v-model="showDrawer2"
               direction="btt"
               size="80%">
        <LazyImage :src="'./assets/image/2025052909.png'" alt=""></LazyImage>
    </el-drawer>
</template>

<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
}

.container h1 {
    text-align: center;
    font-weight: bold;
}

.box1 {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
}

.box1 :deep(img) {
    grid-column: 1 / 9;
    width: 100%;
}
.box1 .button {
    grid-column: 9 / 13;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>
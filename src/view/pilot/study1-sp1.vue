<script setup lang="ts">
import { ref } from 'vue';
import LazyImage from '../../components/LazyImage.vue';

const showDrawer = ref(false);
</script>

<template>
    <div class="container" @click="showDrawer = true">
        <LazyImage :src="'./assets/tanking/幻灯片14.JPG'" alt=""></LazyImage>
    </div>
    <el-drawer v-model="showDrawer"
               direction="btt"
               size="80%">
        <LazyImage :src="'./assets/image/2025052906.png'" alt=""></LazyImage>
    </el-drawer>
</template>

<style lang="css" scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
}
.container :deep(img) {
    width: 100%;
}
</style>

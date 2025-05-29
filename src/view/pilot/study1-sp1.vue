<script setup lang="ts">
import { ref } from 'vue';

const showDrawer = ref(false);
</script>

<template>
    <div class="container" @click="showDrawer = true">
        <img :src="'./assets/tanking/幻灯片14.JPG'" alt="">
    </div>
    <el-drawer v-model="showDrawer"
               direction="btt"
               size="80%">
        <img style="width: 100%;" :src="'./assets/image/2025052906.png'" alt="">
    </el-drawer>
</template>

<style lang="css" scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
}
.container img {
    width: 100%;
}
</style>

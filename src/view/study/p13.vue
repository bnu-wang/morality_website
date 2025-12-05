<script setup lang="ts">
import { ref } from 'vue';
import A1 from './a1.vue';
import LazyImage from '../../components/LazyImage.vue';

const showDrawer = ref(false);
</script>

<template>
    <div class="container">
        <div class="title">
            <h1>Materials: A comprehensive set of morally relevant features</h1>
        </div>
        <div class="a">
            <LazyImage :src="'./assets/image/2025102103newn.png'" alt=""></LazyImage>
            <div class="more" @click="showDrawer = true">Read more—</div>
        </div>
        <el-drawer v-model="showDrawer"
                    direction="btt"
                    size="80%">
                    <A1></A1>
        </el-drawer>
    </div>
</template>

<style lang="css" scoped>
.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 10px;
    font-size: 20px;
}

.title {
    grid-column: 1 / 13;
    text-align: center;
}

.title h1 {
    font-weight: bold;
}
.a {
    grid-column: 1 / 13;
    position: relative;
}

.a :deep(img) {
    width: 100%;
    margin: 15px 0;
}
.a .more {
    position: absolute;
    bottom: 39%;
    right: 4%;
    text-decoration: underline;
    cursor: pointer;
    opacity: 0;
}

/* 移动端适配 */
@media (max-width: 600px) {
    .container {
        grid-column-gap: 5px;
        font-size: 14px;
        padding: 0 15px;
    }

    .title h1 {
        font-size: 18px;
        line-height: 1.4em;
        margin: 15px 0;
    }

    .a :deep(img) {
        margin: 10px 0;
    }
}
</style>

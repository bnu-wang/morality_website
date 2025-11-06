<script setup lang="ts">
import { ref } from 'vue';
import A1 from './a1.vue';

const showDrawer = ref(false);
</script>

<template>
    <div class="container">
        <div class="title">
            <h1>Materials: A comprehensive set of morally relevant features</h1>
        </div>
        <div class="a">
            <img :src="'./assets/image/2025102103new.png'" alt="" srcset="">
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
}
.a {
    grid-column: 1 / 13;
    position: relative;
}

.a img {
    width: 100%;
    margin: 15px 0;
}
.a .more {
    position: absolute;
    bottom: 43%;
    right: 12%;
    text-decoration: underline;
    cursor: pointer;
}
</style>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";

import layout from "../../layout/default.vue";

const route = useRoute();

// 解析URL参数
const to = route.query.to ?? "";

// 滚动到指定元素的方法
const scrollToElement = (selector: string) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

onMounted(() => {
  // 根据URL参数决定是否滚动
  if (to) {
    const headerId = `#${to}`;
    scrollToElement(headerId);
  }
});
</script>

<template>
    <layout>
        <h1 id="study1">Study 1</h1>
        <el-skeleton :rows="20"></el-skeleton>
        <h1 id="study2">Study 2</h1>
        <el-skeleton :rows="5"></el-skeleton>
        <h1 id="study3">Study 3</h1>
        <el-skeleton :rows="5"></el-skeleton>
    </layout>
</template>

<style scoped>

</style>
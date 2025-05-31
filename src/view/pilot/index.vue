<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";

import layout from "../../layout/default.vue";

import Study1 from "./study1.vue";
import Study2 from "./study2.vue";
import Study3 from "./study3.vue";
import study1Sp1 from "./study1-sp1.vue";
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
      <Study1></Study1>
      <study1Sp1></study1Sp1>
      <Study2></Study2>
      <Study3></Study3>
    </layout>
</template>

<style scoped>

</style>
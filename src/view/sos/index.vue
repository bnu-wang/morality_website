<script setup lang="ts">
import CustomSlider1 from "../../components/customSlider1.vue";
import CustomSlider2 from "../../components/customSlider2.vue";
import layout from "../../layout/default.vue";

</script>

<template>
    <layout>
        <CustomSlider1>
            <template #title>
                <h1><span style="color: red;">S</span>ociety-<span style="color: red;">O</span>ther-<span style="color: red;">S</span>elf</h1>
            </template>
            <template #content>
                <el-skeleton :rows="4"></el-skeleton>
            </template>
        </CustomSlider1>
        <CustomSlider2>
            <h1>aaaa</h1>
        </CustomSlider2>
    </layout>
</template>

<style scoped>

</style>
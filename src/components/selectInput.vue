<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { ref } from 'vue';

const props = defineProps<{
    items: Array<{
        value: string;
    }>;
    title: string;
}>();
const emits = defineEmits(['select']);

const input = ref('');
const querySearch = (query: string, cb: any) => {
    const results = props.items.filter((item) => {
        return item.value.toLowerCase().includes(query.toLowerCase());
    });
    cb(results);
};
const selectItem = (item: { value: string }) => {
    emits('select', item);
};
const inputEnter = () => {
    const selectedItem = props.items.find((item) => item.value === input.value);
    if (selectedItem) {
        emits('select', selectedItem);
    } else {
        ElMessage.error('No matching item found');
    }
};
</script>

<template>
    <div class="select-input-component">
        <div class="title">
            {{ props.title }}
        </div>
        <el-autocomplete
            v-model="input"
            :fetch-suggestions="querySearch"
            placeholder="Type to search"
            @select="selectItem"
            class="select-input"
            clearable
            @keydown.enter="inputEnter"
        ></el-autocomplete>
    </div>
</template>

<style lang="css" scoped>

</style>
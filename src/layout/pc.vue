<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

function goto(path: string) {
    router.push(path);
}
const paths = [
    { name: "Introduction", icon: "icon-01 icon-aims", path: "/introduction" },
    { name: "Pilot Studies", icon: "icon-01 icon-search", path: "/study" },
    { name: "Future Plans", icon: "icon-01 icon-task", path: "/future" }
];
</script>

<template>
    <el-container>
        <el-header style="border-bottom: 1px solid #6A7794;">
            <div class="container">
                <div style="grid-column: 1 / 5; cursor: pointer;" @click="goto('/')">Mapping Human Morality</div>
                <div style="grid-column: 5 / 13;">
                    <ul class="nav">
                        <template v-for="path in paths">
                            <li @click="goto(path.path)" :class="{
                                activate: path.path == route.path
                            }">
                                <span :class="`icon ${path.icon}`"></span>{{ path.name }}
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </el-header>
        <el-main>
            <slot></slot>
        </el-main>
    </el-container>
</template>

<style scoped>
.container {
    display: grid;
    max-width: 900px;
    margin: auto;
    grid-template-columns: repeat(12, 1fr);
    line-height: 60px;
    font-size: 14px;
    user-select: none;
}

.container .nav {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    margin: 0;
}

.container .nav li {
    cursor: pointer;
}
.container .nav li.activate {
    box-shadow: inset 0px -2px 1px #fff;
}

.container .nav .icon {
    font-size: 16px;
    margin: 0 10px 0 0;
}
</style>
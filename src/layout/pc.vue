<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

function goto(path: string) {
    router.push(path);
}
const paths = [
    { name: "Background", icon: "icon-01 icon-aims", path: "/introduction" },
    { name: "Pilot studies", icon: "icon-01 icon-search", path: "/study" },
    { name: "Registered report", icon: "icon-01 icon-task", path: "/future" }
];
</script>

<template>
    <el-container>
        <el-header style="border-bottom: 1px solid #6A7794;">
            <div class="container">
                <div class="title"><strong @click="goto('/')">Mapping Human Morality</strong></div>
                <div class="taps">
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
    max-width: 1200px;
    margin: auto;
    grid-template-columns: repeat(12, 1fr);
    user-select: none;
}

.container .nav {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
}
.container .title {
    grid-column: 1 / 7;
    font-size: 24px;
    line-height: 80px;
    font-weight: 500;
}
.container .taps {
    grid-column: 7 / 13;
}

.container .title strong {
    cursor: pointer;
}
.container .nav li {
    font-size: 18px;
    line-height: 80px;
    cursor: pointer;
}
.container .nav li.activate {
    box-shadow: inset 0px -2px 0px #fff;
}

.container .nav .icon {
    font-size: 30px;
    margin: 0 10px 0 0;
    vertical-align: middle;
}

.el-header { height: 80px; }
.el-container {
    width: 100%;
    height: 100%;
}
</style>
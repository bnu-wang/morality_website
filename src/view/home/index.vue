<script setup lang="ts">
const routeLink = [
    { label: "Introduction", link: "/introduction" },
    { label: "Pilot Data", link: "/pilot" },
    { label: "Our SOS Framework", link: "/sos" }
];
</script>

<template>
    <el-container>
        <el-main>
            <h1 class="title">Mapping Morality</h1>
            <div class="display">
                <el-skeleton :rows="5"></el-skeleton>
            </div>
            <div class="label">
                <ul>
                    <li v-for="item in routeLink" :key="item.label">
                        <router-link :to="item.link">
                            <el-button>
                                {{ item.label }}
                            </el-button>
                        </router-link>
                    </li>
                </ul>
            </div>
        </el-main>
    </el-container>
</template>

<style scoped>
:deep(.el-main) {
    text-align: center;
}

.label ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0px;
}
</style>
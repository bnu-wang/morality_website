<script setup lang="ts">

</script>

<template>
    <el-container>
        <el-header>
            <el-menu
                :ellipsis="false"
                mode="horizontal">
                <el-menu-item index="0">
                    <router-link to="/">Mapping Morality</router-link>
                </el-menu-item>
                <el-menu-item index="1">
                    <router-link to="/introduction">Introduction</router-link>
                </el-menu-item>
                <el-sub-menu index="2">
                    <template #title>Data</template>
                    <el-menu-item index="2-1">
                        <router-link to="/pilot">Study 1: Symmetric</router-link>
                    </el-menu-item>
                    <el-menu-item index="2-2">
                        <router-link to="/pilot">Study 2: Across culture</router-link>
                    </el-menu-item>
                    <el-menu-item index="2-3">
                        <router-link to="/pilot">Study 3: Across time</router-link>
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item index="3">
                    <router-link to="/sos">Our SOS Framework</router-link>
                </el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <slot></slot>
        </el-main>
    </el-container>
</template>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
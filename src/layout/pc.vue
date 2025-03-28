<script setup lang="ts">

</script>

<template>
    <el-container>
        <el-header>
            <el-menu
                :router="true"
                :ellipsis="false"
                mode="horizontal">
                <el-menu-item index="/">
                    Mapping Morality
                </el-menu-item>
                <el-menu-item index="introduction">
                    Introduction
                </el-menu-item>
                <el-sub-menu index="pilot">
                    <template #title>Data</template>
                    <el-menu-item index="pilot?to=study1">
                        Study 1: Symmetric
                    </el-menu-item>
                    <el-menu-item index="pilot?to=study2">
                        Study 2: Across culture
                    </el-menu-item>
                    <el-menu-item index="pilot?to=study3">
                        Study 3: Across time
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item index="sos">
                    Our SOS Framework
                </el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <slot></slot>
        </el-main>
    </el-container>
</template>

<style scoped>
:deep(.el-main) {
    min-height: calc(100vh - 60px);
}

.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
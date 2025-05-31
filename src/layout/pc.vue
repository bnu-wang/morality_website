<script setup lang="ts">

</script>

<template>
    <el-container>
        <el-header class="dark">
            <el-menu
                :router="true"
                :ellipsis="false"
                mode="horizontal">
                <el-menu-item index="/">
                    Mapping Human Morality
                </el-menu-item>
                <el-menu-item index="introduction">
                    Introduction
                </el-menu-item>
                <el-sub-menu index="pilot">
                    <template #title>Pilot Data</template>
                    <el-menu-item index="pilot?to=study1">
                        Study 1: Model structure
                    </el-menu-item>
                    <el-menu-item index="pilot?to=study2">
                        Study 2: Cultural comparison
                    </el-menu-item>
                    <el-menu-item index="pilot?to=study3">
                        Study 3: Historical evolution
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item index="sos">
                    Maps and Data
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
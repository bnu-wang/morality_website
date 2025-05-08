<script setup lang="ts">
import { MoreFilled } from '@element-plus/icons-vue';
</script>

<template>
    <el-container>
        <el-header>
            <el-menu :router="true" :ellipsis="false" mode="horizontal">
                <el-menu-item index="/">
                    Mapping Human Morality
                </el-menu-item>
                <el-menu-item>
                    <el-dropdown placement="bottom-end" trigger="click">
                        <el-icon size="33">
                            <MoreFilled />
                        </el-icon>
                        <template #dropdown>
                            <el-menu :router="true">
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
                        </template>
                    </el-dropdown>
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

.el-menu--horizontal>.el-menu-item:nth-child(1) {
    margin-right: auto;
}
</style>
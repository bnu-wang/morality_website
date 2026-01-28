<script setup lang="ts">
import { MoreFilled } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleMenuSelect = (index: string) => {
    // 解析路径和查询参数
    if (index.includes('?')) {
        const [path, queryString] = index.split('?');
        const query: Record<string, string> = {};

        // 解析查询参数
        if (queryString) {
            queryString.split('&').forEach(param => {
                const [key, value] = param.split('=');
                query[key] = value;
            });
        }

        router.push({ path, query });
    } else {
        router.push(index);
    }
};
</script>

<template>
    <el-container>
        <el-header>
            <el-menu :router="true" :ellipsis="false" mode="horizontal">
                <el-menu-item index="/">
                    Mapping Human Morality
                </el-menu-item>
                <el-menu-item>
                    <span class="explore-text">Explore details</span>
                    <el-dropdown placement="bottom-end" trigger="click">
                        <el-icon size="33">
                            <MoreFilled />
                        </el-icon>
                        <template #dropdown>
                            <el-menu :router="false" @select="handleMenuSelect">
                                <el-menu-item index="/introduction">
                                    Background
                                </el-menu-item>
                                <el-sub-menu index="study">
                                    Pilot studies
                                    <!-- <template #title>Pilot studies</template> -->
                                    <!-- <el-menu-item index="/study?to=study1">
                                        Study 1: Model structure
                                    </el-menu-item>
                                    <el-menu-item index="/study?to=study2">
                                        Study 2: Cultural comparison
                                    </el-menu-item>
                                    <el-menu-item index="/study?to=study3">
                                        Study 3: Historical evolution
                                    </el-menu-item> -->
                                </el-sub-menu>
                                <el-menu-item index="/future">
                                    Registered report
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
.el-container {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
}

:deep(.el-header) {
    width: 100%;
    max-width: 100vw;
    padding: 0;
    box-sizing: border-box;
}

:deep(.el-main) {
    min-height: calc(100vh - 60px);
    width: 100%;
    max-width: 100vw;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
}

.el-menu--horizontal>.el-menu-item:nth-child(1) {
    margin-right: auto;
}

.explore-text {
    display: inline-block;
    margin-right: 8px;
    font-size: 14px;
    color: inherit;
}

/* 确保 dropdown 在手机端始终可见 */
:deep(.el-dropdown) {
    display: inline-flex !important;
    align-items: center;
    vertical-align: middle;
}

:deep(.el-dropdown .el-icon) {
    display: flex !important;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

/* 确保下拉菜单弹出层有足够高的 z-index */
:deep(.el-popper) {
    z-index: 9999 !important;
}

/* 确保菜单项在小屏幕上完全可见 */
:deep(.el-menu-item) {
    min-height: 56px;
    line-height: 56px;
    padding: 0 20px;
    white-space: nowrap;
}
</style>
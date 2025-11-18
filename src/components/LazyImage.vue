<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps<{
    src: string;
    alt?: string;
    className?: string;
    // 测试模式：强制延迟显示（仅用于测试，单位：毫秒）
    testDelay?: number;
}>();

const isLoading = ref(true);
const imageError = ref(false);
const imageSrc = ref<string>('');
const isTestMode = ref(false);

const handleLoad = () => {
    isLoading.value = false;
    imageError.value = false;
};

const handleError = () => {
    isLoading.value = false;
    imageError.value = true;
};

// 测试模式：如果设置了testDelay，延迟加载图片
onMounted(() => {
    if (props.testDelay && props.testDelay > 0) {
        isTestMode.value = true; // 启用测试模式，PC端也显示提示
        // 延迟后才设置src，用于测试加载提示
        setTimeout(() => {
            imageSrc.value = props.src;
            // 检查图片是否已经缓存（已加载完成）
            const img = new Image();
            img.onload = () => {
                // 如果图片已缓存，立即触发load事件
                handleLoad();
            };
            img.src = props.src;
        }, props.testDelay);
    } else {
        // 正常模式，立即加载
        imageSrc.value = props.src;
        // 检查图片是否已经缓存
        const img = new Image();
        img.onload = () => {
            handleLoad();
        };
        img.src = props.src;
    }
});
</script>

<template>
    <div class="lazy-image-wrapper">
        <img 
            v-if="imageSrc"
            :src="imageSrc" 
            :alt="alt || ''" 
            :class="className"
            @load="handleLoad"
            @error="handleError"
        />
        <div v-if="isLoading" :class="['loading-text', { 'test-mode': isTestMode }]">loading...</div>
        <div v-if="imageError" :class="['error-text', { 'test-mode': isTestMode }]">图片加载失败</div>
    </div>
</template>

<style lang="css" scoped>
.lazy-image-wrapper {
    position: relative;
    width: 100%;
    min-height: 100px; /* 确保有足够空间显示提示 */
}

.loading-text,
.error-text {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    color: #666;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 8px 16px;
    border-radius: 4px;
    z-index: 10;
    white-space: nowrap;
}

/* 只在移动端显示加载提示 */
@media (max-width: 600px) {
    .loading-text,
    .error-text {
        display: block !important;
    }
}

/* 测试模式：如果设置了testDelay，PC端也显示提示（方便测试） */
.loading-text.test-mode,
.error-text.test-mode {
    display: block !important;
}

img {
    width: 100%;
    display: block;
}
</style>


<script setup lang="ts">
import layout from "../../layout/default.vue";
import StarNew from "./components/StarNew.vue";
import LazyImage from "../../components/LazyImage.vue";
</script>

<template>
    <layout>
        <div class="cb">
            <div class="container">
                <div class="a">
                    <p class="w">"Two things awe me most, the starry sky above me and the moral law within me."</p>
                    <p class="r">——Kant</p>
                </div>
                <div class="b">
                    <StarNew></StarNew>
                </div>
                <!-- PC端图片 -->
                <div class="c pc-only-image">
                    <LazyImage :src="'./assets/image/2025101501.png'" alt=""></LazyImage>
                </div>
                <!-- 移动端图片 -->
                <div class="c mobile-only-image">
                    <LazyImage :src="'./assets/image/2025101501.png'" alt=""></LazyImage>
                </div>
            </div>
        </div>
    </layout>
</template>

<style lang="css" scoped>
.cb {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
}
.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 10px;
}

.a {
    grid-column: 1 / 6;
    grid-row: 1 / 2;
    font-size: 32px;
}
.b {
    grid-column: 6 / 13;
    grid-row: 1 / 3;
}
.c {
    grid-column: 1 / 6;
    grid-row: 2 / 3;
}
.d {
    grid-column: 1 / 13;
    margin: 60px;
    text-align: center;
}

.a .r {
    text-align: right;
}

:deep(img) {
    width: 100%;
    height: 100%;
}

/* 默认隐藏移动端图片 */
.mobile-only-image {
    display: none;
}

/* PC端样式 */
@media screen and (min-width: 769px) {
    /* 显示PC端图片，隐藏移动端图片 */
    .pc-only-image {
        display: block;
        position: relative;
        overflow: visible;
    }
    
    .mobile-only-image {
        display: none !important;
    }
    
    .pc-only-image :deep(img) {
        width: auto !important;
        height: auto !important;
        min-width: 600px !important;
        max-width: none !important;
    }
}

/* 手机端响应式样式 */
@media screen and (max-width: 768px) {
    .cb {
        padding: 0 20px;
        overflow-x: hidden;
        box-sizing: border-box;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 100%;
        width: 100%;
        padding: 20px 0;
        box-sizing: border-box;
        overflow-x: hidden;
    }
    
    .a {
        font-size: 18px;
        line-height: 1.6;
        order: 1;
    }
    
    .a .w {
        margin-bottom: 10px;
    }
    
    .a .r {
        text-align: right;
        font-size: 16px;
    }
    
    .b {
        order: 2;
        width: 100%;
        height: 300px;
        min-height: 300px;
    }
    
    .c {
        order: 3;
        width: 100%;
    }
    
    /* 隐藏PC端图片，显示移动端图片 */
    .pc-only-image {
        display: none !important;
    }
    
    .mobile-only-image {
        display: block !important;
        width: calc(100% + 40px) !important;
        margin-left: -20px !important;
        margin-right: -20px !important;
        max-width: none !important;
    }
    
    .mobile-only-image :deep(.lazy-image-wrapper) {
        width: 100% !important;
        max-width: none !important;
        display: block !important;
    }
    
    .d {
        margin: 30px 0;
    }
    
    :deep(img) {
        width: 100% !important;
        height: auto !important;
        object-fit: contain !important;
    }
    
    .mobile-only-image :deep(img) {
        width: 100% !important;
        max-width: none !important;
        height: auto !important;
        display: block !important;
    }
}

/* 针对更小的手机屏幕 */
@media screen and (max-width: 480px) {
    .cb {
        padding: 0 15px;
    }
    
    .container {
        gap: 15px;
    }
    
    .a {
        font-size: 16px;
    }
    
    .a .r {
        font-size: 14px;
    }
    
    .b {
        height: 250px;
        min-height: 250px;
    }
    
    .mobile-only-image {
        width: calc(100% + 30px) !important;
        margin-left: -15px !important;
        margin-right: -15px !important;
    }
}
</style>

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
                    <p class="w">“Morality is the science of the relations which exist between the minds, wills and actions of men, in the same manner as geometry is the science of the relations that are found between bodies.”</p>
                    <p class="r">——《Elements of Universal Morality》Baron d'Holbach</p>
                </div>
                <div class="b">
                    <StarNew></StarNew>
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
    grid-column-gap: 40px;
    align-items: center;
}

.a {
    grid-column: 1 / 8;
    font-size: 24px;
    line-height: 1.6;
    letter-spacing: 0.5px;
}
.a .w {
    margin-bottom: 20px;
}

.a .r {
    text-align: right;
    font-size: 18px;
    color: #666; /* 稍微弱化署名颜色，突出引言主体 */
}
  
.b {
    grid-column: 8 / 13;
    width: 100%;
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

/* 手机端响应式样式 (< 768px) */
@media screen and (max-width: 768px) {
    .cb {
        padding: 0 20px;
        overflow-x: hidden;
        box-sizing: border-box;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 30px;
        max-width: 100%;
        width: 100%;
        padding: 40px 0;
        box-sizing: border-box;
    }
    
    .a {
        font-size: 18px;
        order: 1; /* 保证文字在上面 */
    }
    
    .a .r {
        font-size: 14px;
    }
    
    .b {
        order: 2; /* 保证星空在下面 */
        width: 100%;
        height: 350px;
        min-height: 350px;
    }
}

/* 针对更小的手机屏幕 (< 480px) */
@media screen and (max-width: 480px) {
    .cb {
        padding: 0 15px;
    }
    
    .a {
        font-size: 16px;
    }
    
    .b {
        height: 250px;
        min-height: 250px;
    }
}
</style>

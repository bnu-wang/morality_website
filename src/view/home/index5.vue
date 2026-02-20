<script setup lang="ts">
import layout from "../../layout/default.vue";
import StarNew from "./components/StarNew.vue";
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
/* 基础容器布局 */
.cb {
    display: flex;
    /* align-items: center;  <- 去掉这个，让 container 决定垂直对齐 */
    width: 100%;
    height: 100%;
    min-height: 600px; /* 保证整个区域在 PC 上有足够的高度 */
}

.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%; /* 确保占满宽度 */
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 30px; /*稍微减小间距，让两个区块更紧凑 */
    align-items: center; /* 让左右两个区块在垂直方向上居中对齐 */
}

/* PC端：左侧文字区域 */
.a {
    /* 【改动点1】宽度变窄，让文字多行显示 */
    grid-column: 1 / 6; 
    padding: 20px 0; /* 增加一点上下的呼吸感 */
    font-size: 24px;
    line-height: 1.6;
    letter-spacing: 0.5px;
    /* text-align: justify; 如果喜欢两端对齐可以加上这行 */
}

.a .w {
    margin-bottom: 25px;
}

.a .r {
    text-align: right;
    font-size: 18px;
    color: #888; 
    font-style: italic; /* 给署名加个斜体，更有引用感 */
}

/* PC端：右侧星空区域 */
.b {
    /* 【改动点2】宽度变大，占据右侧更多空间 */
    grid-column: 6 / 13; 
    width: 100%;
    /* 【改动点3】确保 PC 端有足够的高度，撑大视觉区域 */
    height: 100%;
    min-height: 500px; 
    display: flex;
    align-items: center; /* 确保 StarNew 组件在区域内居中 */
    justify-content: center;
}

/* 确保 StarNew 组件填满区域 b */
.b :deep(> *) {
    width: 100%;
    height: 100%;
    /* 如果 StarNew 内部是 canvas 或 img，可能需要 object-fit */
    /* object-fit: cover; */ 
}


/* 手机端响应式样式 (< 768px) */
@media screen and (max-width: 768px) {
    .cb {
        padding: 0 20px;
        min-height: auto; /* 手机端不需要强制最小高度 */
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 40px 0;
    }
    
    .a {
        font-size: 18px;
        order: 1; 
        padding: 0; /* 手机端去掉额外的 padding */
    }
    
    .a .r {
        font-size: 14px;
    }
    
    .b {
        order: 2;
        /* 手机端保持原样，或者根据需要调整 */
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

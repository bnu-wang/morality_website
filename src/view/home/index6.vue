<script setup lang="ts">
import Layout from "../../layout/default.vue";
import StarNew from "./components/StarNew.vue";
</script>

<template>
    <Layout>
        <div class="cb">
            <div class="container">
                <div class="a">
                    <p class="w">“Two things awe me most, the starry sky above me and the moral law within me.”</p>
                    <p class="r">——Kant</p>
                    <p class="w"> </p>
                    <p class="w">“Morality is the science of the relations which exist between the minds, wills and actions of men, in the same manner as geometry is the science of the relations that are found between bodies.”</p>
                    <p class="r">——《Elements of Universal Morality》Baron d'Holbach</p>
                </div>
                <div class="b">
                    <StarNew></StarNew>
                </div>
            </div>
            
            <div class="footer">
                For more information about this project, please contact Dr. Yin Wang at Beijing Normal University (<a href="mailto:mirrorneuronwang@gmail.com">mirrorneuronwang@gmail.com</a>)
            </div>
        </div>
    </Layout>
</template>

<style lang="css" scoped>
/* 基础容器布局 */
.cb {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 600px; 
    position: relative; /* 让 footer 以此为基准悬浮 */
}

.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%; 
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 30px; 
    align-items: center; 
}

/* PC端：左侧文字区域 */
.a {
    grid-column: 1 / 6; 
    grid-row: 1 / 3;
    font-size: 24px;
    line-height: 1.6;
    letter-spacing: 0.5px;
}

.a .w {
    margin-bottom: 25px;
}

.a .r {
    text-align: right;
    font-size: 16px;
    color: #888; 
    font-style: italic; 
}

/* PC端：右侧星空区域 */
.b {
    grid-column: 6 / 13; 
    grid-row: 1 / 3;
    display: flex;
    align-items: center; 
    justify-content: center;
}

/* ===== 底部悬浮信息样式 ===== */
.footer {
    position: absolute; 
    bottom: 20px; /* 距离底部的距离，可根据需要微调 */
    left: 0;
    width: 100%;
    box-sizing: border-box; /* 确保 padding 包含在宽度内，避免横向滚动条 */
    padding: 0 20px; 
    text-align: center;
    font-size: 14px;
    color: #888;
    line-height: 1.5;
    z-index: 10; /* 确保文字在最上层 */
}

.footer a {
    color: #888;
    text-decoration: underline;
    transition: color 0.3s ease;
}

.footer a:hover {
    color: #fff; 
}

/* 手机端响应式样式 (< 768px) */
@media screen and (max-width: 768px) {
    .cb {
        padding: 0 20px 80px 20px; /* 底部留白，防止悬浮 footer 遮挡内容 */
        min-height: auto; 
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 40px 0 0 0;
    }
    
    .a {
        font-size: 18px;
        order: 1; 
        padding: 0; 
    }
    
    .a .r {
        font-size: 14px;
    }
    
    .b {
        order: 2;
        width: 100%;
        height: 300px;
        min-height: 300px;
    }

    .footer {
        font-size: 12px;
        bottom: 20px;
    }
}

/* 针对更小的手机屏幕 (< 480px) */
@media screen and (max-width: 480px) {
    .cb {
        padding: 0 15px 70px 15px;
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

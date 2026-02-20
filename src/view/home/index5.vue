<script setup lang="ts">
import layout from "../../layout/default.vue";
import StarNew from "./components/StarNew.vue";
// 删除了 LazyImage 的引入，保持代码干净
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
    align-items: center;
    width: 100%;
    height: 100%;
}

.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 40px; /* 增加了列间距，让左右两边呼吸感更强 */
    align-items: center; /* 确保文字和星空在垂直方向居中对齐 */
}

/* PC端：左侧文字区域 */
.a {
    grid-column: 1 / 8; /* 【重点】从原来的 1/6 扩大到 1/8，给这段长文字充足的横向空间 */
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

/* PC端：右侧星空区域 */
.b {
    grid-column: 8 / 13; /* 星空组件向右挪，占据剩下的 5 列 */
    width: 100%;
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

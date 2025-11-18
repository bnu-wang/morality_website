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
                <div class="c">
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
    
    .d {
        margin: 30px 0;
    }
    
    :deep(img) {
        width: 100%;
        height: auto;
        object-fit: contain;
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
}
</style>

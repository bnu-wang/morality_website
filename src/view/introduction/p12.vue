<script setup lang="ts">
import LazyImage from '../../components/LazyImage.vue';
</script>

<template>
    <div class="container">
        <div class="title">
            <h1 style="font-size: 40px;">We aim to build a model with PRAGMATIC value</h1>
        </div>
        <div class="a">
            <p class="f-t">
                The Universal Map of Human Morality
            </p>
            <p class="f-n">
                Do all humans share a common moral foundation? <br>
                Our project seeks to reveal the universal patterns <br>
                underlying diverse moral codes found around the world.
            </p>
        </div>
        <div class="b">
            <p>Moral Space</p>
            <LazyImage :src="'./assets/image/2025101701.png'" alt=""></LazyImage>
        </div>
        <div class="g">
            <p class="f-t">
                Our Data-Driven Approach
            </p>
            <p class="f-n">
                We integrate dozens of existing models <br>
                to find a shared, core structure. <br>
                Across Space: We collect data from <br>
                people all over the globe. <br>
                Across Time: We examine ancient texts <br>
                from different civilizations.
            </p>
        </div>
        <div class="c">
            <p>
                Cultural Comparisons
            </p>
        </div>
        <div class="d">
            <LazyImage :src="'./assets/image/2025101703.png'" alt=""></LazyImage>
        </div>
        <div class="e">
            <p>
                Historical Evolution
            </p>
        </div>
        <div class="f">
            <LazyImage :src="'./assets/image/2025101702.png'" alt=""></LazyImage>
        </div>
        <div class="h">
            <p class="f-t">
                A Safer Future for AI
            </p>
            <p class="f-n">
                A fundamental of human morality provides a <br>
                clear, global, and empirically grounded <br>
                blueprint for aligning AI's values with our own, <br>
                ensuring that AI systems are ethical and safe.
            </p>
        </div>
        <div class="i">
            <p>
                AI Safety
            </p>
            <div class="i-imgs">
                <LazyImage :src="'./assets/image/2025101704_left.png'" alt="" className="i-img-left"></LazyImage>
                <LazyImage :src="'./assets/image/2025101704_right.png'" alt="" className="i-img-right"></LazyImage>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(13, 100px);
    grid-column-gap: 10px;
    font-family: "PingFang SC";
}

.title {
    grid-column: 1 / 13;
    grid-row: 1 / 2;
    text-align: center;
}
.a { grid-column: 1 / 9; grid-row: 2 / 5; }
.b {
    grid-column: 10 / 13;
    grid-row: 2 / 6;
}
.c {
    grid-column: 1 / 3;
    grid-row: 5 / 7;
}
.d {
    grid-column: 3 / 7;
    grid-row: 5 / 7;
}
.e {
    grid-column: 1 / 3;
    grid-row: 8 / 10;
}
.f {
    grid-column: 3 / 7;
    grid-row: 8 / 10;
}
.g {
    grid-column: 7 / 13;
    grid-row: 6 / 10;
}
.h {
    grid-column: 1 / 7;
    grid-row: 10 / 14;
}
.i {
    grid-column: 7 / 13;
    grid-row: 10 / 14;
}

.title h1 {
    font-size: 40px;
    line-height: 56px;
    font-weight: 700;
}
.b p, .i p {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
}
.c p, .e p {
    font-size: 30px;
    font-weight: bolder;
    line-height: 1.5em;
}

.c, .d, .e, .f {
    display: flex;
    align-items: center;
}

.f-t {
    font-size: 30px;
    line-height: 1.5em;
    font-weight: 700;
    text-decoration: underline;
}
.f-n {
    font-size: 28px;
    line-height: 1.5em;
    font-weight: 300;
}

/* 默认图片占满容器 */
:deep(img) {
    width: 100%;
}

.i-imgs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
}

/* 固定尺寸的图片 */
.i-imgs :deep(img.i-img-left) {
    width: 152px;
    height: 143px;
    object-fit: contain;
}

.i-imgs :deep(img.i-img-right) {
    width: 274px;
    height: 211px;
    object-fit: contain;
}

/* 移动端适配 */
@media (max-width: 600px) {
    .container {
        grid-column-gap: 10px;
        grid-template-rows: auto;
        padding: 0 15px;
    }

    .title {
        grid-column: 1 / 13;
        grid-row: auto;
    }

    .title h1 {
        font-size: 20px !important;
        line-height: 1.4em !important;
        margin: 15px 0;
    }

    .a {
        grid-column: 1 / 13;
        grid-row: auto;
        margin-bottom: 20px;
    }

    .b {
        grid-column: 1 / 13;
        grid-row: auto;
        margin-bottom: 20px;
        text-align: center;
    }

    .b :deep(.lazy-image-wrapper) {
        width: 60%;
        margin: 0 auto;
    }

    .c {
        grid-column: 1 / 13;
        grid-row: auto;
        margin-bottom: 10px;
    }

    .d {
        grid-column: 1 / 13;
        grid-row: auto;
        margin-bottom: 20px;
    }

    .e {
        grid-column: 1 / 13;
        grid-row: auto;
        margin-bottom: 10px;
    }

    .f {
        grid-column: 1 / 13;
        grid-row: auto;
        margin-bottom: 20px;
    }

    .g {
        grid-column: 1 / 13;
        grid-row: auto;
        margin-bottom: 20px;
    }

    .h {
        grid-column: 1 / 13;
        grid-row: auto;
        margin-bottom: 20px;
    }

    .i {
        grid-column: 1 / 13;
        grid-row: auto;
        margin-bottom: 20px;
    }

    .b p, .i p {
        font-size: 18px;
    }

    .c p, .e p {
        font-size: 18px;
        line-height: 1.4em;
    }

    .f-t {
        font-size: 18px;
        line-height: 1.4em;
    }

    .f-n {
        font-size: 14px;
        line-height: 1.5em;
    }

    .i-imgs {
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .i-imgs :deep(img.i-img-left) {
        width: 120px;
        height: auto;
    }

    .i-imgs :deep(img.i-img-right) {
        width: 180px;
        height: auto;
    }
}
</style>

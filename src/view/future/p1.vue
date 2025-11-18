<script setup lang="ts">
import LazyImage from '../../components/LazyImage.vue';
</script>

<template>
    <div class="cb">
        <div class="container">
            <div class="title">
                <h1>Future plan on contemporary exploration</h1>
            </div>
            <div class="b">
                <p class="title">18 Global Countries (n = 10,800)</p>
                <p class="desc" style="padding: 0px 85px 0px 52px;">We plan to collect data from participants in 18 culturally diverse countries across five continents and in 11 languages collectively representing more than half of the world's population.</p>
            </div>
            <div class="a">
                <LazyImage :src="'./assets/image/2025102104.png'" alt=""></LazyImage>
            </div>
            <div class="c">
                <p class="title">Underlying Mechanisms<br />for Regional Differences</p>
                <p class="desc">To explain differences in moral conceptual space across regions, we draw on variables
                    from a multinational database covering cultural, economic, and ecological domains.</p>
            </div>
            <div class="d">
                <LazyImage :src="'./assets/image/2025102105.png'" alt=""></LazyImage>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-rows: min-content;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 10px;
}

.title {
    grid-column: 1 / 13;
    margin-bottom: 20px;
}
.title > h1 {
    font-size: 40px;
    line-height: 1.5em;
    text-align: center;
    font-weight: 700;
    margin-top: -30px;
}

.b {
    grid-column: 1 / 7;
}
.a {
    grid-column: 7 / 13;
}

.c {
    grid-column: 7 / 13;
}

.d {
    grid-column: 1 / 6;
}

.c, .d {
    margin: 80px 0 0 0;
}

.a :deep(img) {
    width: 100%;
}

.d :deep(img) {
    width: 100%;
    margin-left: 50px;
}

.b .title,
.c .title {
    margin: 0;
    font-size: 32px;
    line-height: 45px;
    font-weight: 700;
    text-align: center;
}

.b .desc,
.c .desc {
    font-size: 24px;
    line-height: 32px;
    text-align: left;
}

/* 移动端适配 */
@media (max-width: 600px) {
    .container {
        grid-column-gap: 5px;
        padding: 0 15px;
    }

    .title > h1 {
        font-size: 20px;
        line-height: 1.4em;
        margin-top: 0;
        margin-bottom: 15px;
    }

    .b {
        grid-column: 1 / 13;
        margin-bottom: 20px;
    }

    .a {
        grid-column: 1 / 13;
        margin-bottom: 20px;
    }

    .d {
        grid-column: 1 / 13;
        margin: 20px 0;
    }

    .c {
        grid-column: 1 / 13;
        margin: 20px 0;
    }

    .b .title,
    .c .title {
        font-size: 18px;
        line-height: 1.4em;
        margin-bottom: 10px;
    }

    .b .desc,
    .c .desc {
        font-size: 14px;
        line-height: 1.6em;
        padding: 0 !important;
    }

    .d :deep(img) {
        margin-left: 0;
    }
}
</style>

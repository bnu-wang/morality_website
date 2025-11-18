<script setup lang="ts">
import LazyImage from '../../components/LazyImage.vue';
</script>

<template>
    <div class="container">
        <div class="a">
            <h1><strong>Our opinion: </strong><br />Universal coordinates space, Culturally-tuned weights</h1>
        </div>
        <div class="b">
            <p>We hypothesize that human communities <strong>share a common conceptual scaffold</strong> for morality, but locate specific moral actions differently within that scaffold.</p>
        </div>
        <div class="c">
            <LazyImage :src="`./assets/image/2025100714.png`" alt=""></LazyImage>
        </div>
        <div class="d">
            Universality lies in cognitive and computational machinery: all humans share an architecture for organizing and evaluating moral actions. The analogy to language is instructive: just as all humans possess the capacity for language acquisition, so too they share a framework for morality.
        </div>
        <div class="e">
            Diversity emerges at the level of cultural input and implementation. Local physical and social environments supply the content that tunes this shared machinery. Thus, communities may share a common scaffold for morality, yet place specific moral actions differently within it. 
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 30px;
}

.a { grid-column: 1 / 7; }
.b { grid-column: 7 / 13; }
.c {
    grid-column: 1 / 13;
    margin: 40px 0;
}
.d, .e {
    grid-column: span 6;
    margin: 0 0 50px 0;
    font-size: 26px;
    line-height: 1.5em;
    font-weight: 500;
}

.a h1 {
    display: inline-block;
    font-size: 40px;
    line-height: 56px;
    vertical-align: middle;
    font-weight: 500;
}
.a h1 strong {
    font-size: 50px;
    line-height: 72px;
}
.b p {
    padding: 40px 24px;
    border: solid 1px #fff;
    border-radius: 25px;
    font-size: 26px;
    line-height: 32px;
}

:deep(img) {
    width: 100%;
}

/* 移动端适配 */
@media (max-width: 600px) {
    .container {
        grid-column-gap: 10px;
        padding: 0 15px;
    }

    .a {
        grid-column: 1 / 13;
        margin-bottom: 20px;
    }

    .b {
        grid-column: 1 / 13;
    }

    .a h1 {
        font-size: 18px;
        line-height: 1.4em;
    }

    .a h1 strong {
        font-size: 20px;
        line-height: 1.4em;
    }

    .b p {
        padding: 20px 15px;
        border-radius: 15px;
        font-size: 14px;
        line-height: 1.5em;
    }

    .c {
        margin: 20px 0;
    }

    .d, .e {
        grid-column: 1 / 13;
        margin: 0 0 20px 0;
        font-size: 14px;
        line-height: 1.5em;
    }
}
</style>

<script setup lang="ts">
import LazyImage from '../../components/LazyImage.vue';
</script>

<template>
    <div class="container">
        <div class="title">
            <h2>Historical evolution of morality in ancient Chinese texts</h2>
        </div>
        <div class="lt">
            <p>
                We compared ancient and modern Chinese moral views by analyzing how much each dimension contributed to the overall moral framework in each period. Ancient Chinese emphasized "care for others" and "harm to others," reflecting Confucian virtues like Ren (benevolence). In contrast, modern Chinese prioritizes societal level, underscoring the importance of collectivism and national interests in today's society.
            </p>
        </div>
        <div class="rt">
            <LazyImage :src="'./assets/image/2025102106.png'" alt=""></LazyImage>
        </div>
        <div class="lb">
            <LazyImage :src="'./assets/image/2025102107.png'" alt=""></LazyImage>
        </div>
        <div class="mb">
            <p>We'll employ a more <strong>refined hybrid retrieval method</strong> to track the evolution of ideas
                within a vast 3,000-year Classical Chinese corpus.</p>
            <p>
                Preliminary findings show that "self-control" dips during the Six Dynasties (collapse of centralized
                order and rise of Xuanxue), and resurges in the Song Dynasty with the revival of Neo-Confucian thought.
            </p>
        </div>
        <div class="rb">
            <div>
                <div>
                    <LazyImage :src="'./assets/image/2025100803new1.png'" alt=""></LazyImage>
                </div>
                <div class="icon ip2"></div>
                <div class="s p1">
                    <LazyImage :src="'./assets/image/2025100816.png'" alt=""></LazyImage>
                </div>
                <div class="icon ip1"></div>
                <div class="s p2">
                    <LazyImage :src="'./assets/image/2025100817.png'" alt=""></LazyImage>
                </div>
            </div>
            <p style="font-size: 16px; text-align: center; margin: 0; font-weight: 100;">Hover over the dot to see the details.</p>
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 20px;
    font-size: 22px;
    line-height: 1.5em;
}

.title {
    grid-column: 1 / 13;
    text-align: center;
}

.lt {
    grid-column: 1 / 7;
    text-align: justify;
}

.rt {
    grid-column: 8 / 13;
}

.lb {
    grid-column: 1 / 7;
    margin: 0 20px 0 0;
}

.mb {
    grid-column: 7 / 10;
    font-size: 18px;
    line-height: 1.5em;
    text-align: justify;
}

.rb {
    grid-column: 10 / 13;
}
.rb > div {
    position: relative;
}

.mb p {
    position: relative;
}

.mb p:nth-child(1)::before {
    content: '';
    width: 32px;
    height: 32px;
    position: absolute;
    top: 0px;
    left: -36px;
    background-image: url('./assets/image/2025100804.png');
    background-size: contain;
}

.mb p:nth-child(2)::before {
    content: '';
    width: 32px;
    height: 32px;
    position: absolute;
    bottom: -12px;
    right: 0px;
    background-image: url('./assets/image/2025100804.png');
    background-size: contain;
    transform: rotate(180deg);
}

.rb .s {
    display: block;
    width: 80%;
    position: absolute;
    right: 3px;
    top: 3px;
    visibility: hidden;
}
.rb .icon {
    display: block;
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: red;
    border-radius: 50%;
}
/* PC端样式 */
@media (min-width: 601px) {
    .rb .icon.ip1 {
        bottom: 48%;
        left: 60.5%;
    }
    .rb .icon.ip2 {
        bottom: 26%;
        left: 40%;
    }
}
.ip1:hover +.p2 {
    visibility: visible;
}
.ip2:hover +.p1 {
    visibility: visible;
}

:deep(img) {
    width: 100%;
}

/* 移动端适配 */
@media (max-width: 600px) {
    .container {
        grid-column-gap: 10px;
        font-size: 14px;
        line-height: 1.5em;
        padding: 0 15px;
    }

    .title h2 {
        font-size: 18px;
        line-height: 1.4em;
        margin: 15px 0;
    }

    .lt {
        grid-column: 1 / 13;
        margin-bottom: 15px;
    }

    .rt {
        grid-column: 1 / 13;
        margin-bottom: 15px;
    }

    .lb {
        grid-column: 1 / 13;
        margin: 0 0 15px 0;
    }

    .mb {
        grid-column: 1 / 13;
        font-size: 14px;
        margin-bottom: 15px;
    }

    .rb {
        grid-column: 1 / 13;
    }

    .lt p,
    .mb p {
        font-size: 14px;
        line-height: 1.6em;
    }

    .mb p:nth-child(1)::before,
    .mb p:nth-child(2)::before {
        display: none;
    }

    .rb .icon {
        width: 12px;
        height: 12px;
    }

    .rb .s {
        width: 90%;
    }

    .rb .icon.ip1 {
        bottom: 48%;
        left: 61%;
    }

    .rb .icon.ip2 {
        bottom: 25%;
        left: 41%;
    }
}
</style>

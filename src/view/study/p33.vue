<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="title">
            <h2>Historical evolution of morality in ancient Chinese texts</h2>
        </div>
        <div class="lt">
            <p>
                We compared ancient and modern Chinese moral views by analyzing how much each dimension contributed to
                the overall moral framework in each period. Ancient Chinese emphasized "care for others" and
                "self-control," reflecting Confucian virtues like Ren (benevolence) and Li (propriety). In contrast,
                modern Chinese prioritizes "sacrifice," underscoring the importance of collectivism and national
                interests in today's society.
            </p>
        </div>
        <div class="rt">
            <img :src="'./assets/image/2025100801.png'" alt="" srcset="">
        </div>
        <div class="lb">
            <img :src="'./assets/image/2025100802.png'" alt="" srcset="">
        </div>
        <div class="mb">
            <p>We’ll employ a more <strong>refined hybrid retrieval method</strong> to track the evolution of ideas
                within a vast 3,000-year Classical Chinese corpus.</p>
            <p>
                Preliminary findings show that "self-control" dips during the Six Dynasties (collapse of centralized
                order and rise of Xuanxue), and resurges in the Song Dynasty with the revival of Neo-Confucian thought.
            </p>
        </div>
        <div class="rb">
            <img :src="'./assets/image/2025100803.png'" alt="" srcset="">
            <div class="icon ip2"></div>
            <div class="s p1">
                <img :src="'./assets/image/2025100816.png'" alt="">
            </div>
            <div class="icon ip1"></div>
            <div class="s p2">
                <img :src="'./assets/image/2025100817.png'" alt="">
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
    grid-column-gap: 10px;
}

.title {
    grid-column: 2 / 12;
    text-align: center;
}

.lt {
    grid-column: 2 / 7;
    font-size: 16px;
    line-height: 28px;
    text-align: justify;
}

.rt {
    grid-column: 7 / 12;
}

.lb {
    grid-column: 1 / 6;
}

.mb {
    grid-column: 6 / 9;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
}

.rb {
    grid-column: 9 / 12;
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
.rb .icon.ip1 {
    bottom: 47%;
    left: 62.5%;
}
.rb .icon.ip2 {
    bottom: 25%;
    left: 43%;
}
.ip1:hover +.p2 {
    visibility: visible;
}
.ip2:hover +.p1 {
    visibility: visible;
}

img {
    width: 100%;
}
</style>

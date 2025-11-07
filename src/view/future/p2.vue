<script setup lang="ts">

</script>

<template>
    <div class="cb">
        <div class="container">
            <div class="title">
                <h1>Future plan on ancient exploration</h1>
            </div>
            <div class="left">
                <p>Besides Ancient China, we plan to <br />
                    <span style="color: #FF7F50; font-weight: 700;">revive the mind of Medieval Europe</span><br />
                    using the same method <br />
                    (PLMs & LLMs).</p>
                <img :src="'./assets/image/2025100719.png'" alt="" srcset="">
            </div>
            <div class="right">
                <p class="tt">How to extract moral actions and their descriptions?</p>
                <img :src="'./assets/image/2025100720.png'" alt="" srcset="">
                <p class="tt1 f2 s">Philosophy of the Elite <br/>(Summa Confessorum)</p>
                <p class="tt1 f2 s">Theological works <br/>(The Pilgrim’s Progress)</p>
                <p class="tt">How to obtain the representation?</p>
                <ul>
                    <li>
                        <p class="f1 s">large language models (LLMs): </p>
                        <p class="f2 i">Volk et al. (2024) LLM-based Machine Translation and Summarization for Latin. </p>
                    </li>
                    <li>
                        <p class="f1 s">pre-trained language models (PLMs): </p>
                        <p class="f2 i">LatinBERT: https://github.com/dbamman/latin-bert</p>
                    </li>
                </ul>
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
    grid-column-gap: 5px;
}

.title {
    grid-column: 1 / 13;
    text-align: center;
}
.title h1 {
    font-size: 40px;
    line-height: 56px;
    font-weight: 700;
}

.left {
    grid-column: 1 / 7;
}

.right {
    grid-column: 7 / 12;
}

.left p {
    font-size: 30px;
    line-height: 42px;
    font-weight: 700;
}
.right .tt1 {
    display: inline-block;
    width: 50%;
    padding: 0;
    margin: 0;
    text-align: center;
}
.right ul li p {
    padding: 0;
    margin: 0;
}

img {
    width: 100%;
}
.left img {
    width: 75%;
}

.tt {
    font-size: 30px;
    line-height: 42px;
    padding: 0;
    margin: 20px 0;
}
.f1 {
    font-size: 24px;
    line-height: 1.4em;
}
.f2 {
    font-size: 20px;
    line-height: 1.4em;
}

.s {
    font-weight: 700;
}

.i {
    text-indent: -1em;
}
</style>


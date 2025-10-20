<script setup lang="ts">

</script>

<template>
    <div class="cb">
        <div class="container">
            <div class="title">
                <h1>Future plan on ancient exploration</h1>
            </div>
            <div class="left">
                <p>Besides Ancient China, we plan to <span style="color: #FF7F50; font-weight: 700;">"revive the mind of
                        Medieval Europe"</span> using the same method (PLMs & LLMs).</p>
                <img :src="'./assets/image/2025100719.png'" alt="" srcset="">
            </div>
            <div class="right">
                <p class="u s">How to extract moral actions and their descriptions?</p>
                <p>Classical Latin literature + 2 Human Experts</p>
                <p>Philosophy of the Elite + Theological works</p>
                <img :src="'./assets/image/2025100720.png'" alt="" srcset="">
                <p class="u s">How to obtain the representation?</p>
                <ul>
                    <li>
                        <p class="s">large language models (LLMs): </p>
                        <p class="i">Volk et al. (2024) LLM-based Machine Translation and Summarization for Latin. </p>
                    </li>
                    <li>
                        <p class="s">pre-trained language models (PLMs): </p>
                        <p class="i">LatinBERT: https://github.com/dbamman/latin-bert</p>
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
    grid-column-gap: 10px;
}

.title {
    grid-column: 1 / 13;
    text-align: center;
}

.left {
    grid-column: 2 / 6;
}

.right {
    grid-column: 7 / 12;
}

.left p {
    font-size: 20px;
    line-height: 32px;
}

img {
    width: 100%;
}

.u {
    text-decoration: underline;
}

.s {
    font-weight: 700;
}

.i {
    text-indent: -1em;
}
</style>

<script setup lang="ts">
import layout from "../../layout/default.vue";
import CustomButton from "../../components/customButton.vue";
</script>

<template>
    <layout>
        <div class="container">
            <div class="lbox"><img :src="`./assets/image/2025032801.png`" /></div>
            <div class="rbox">
                <div class="desc-box">
                    What makes human actions moral or immoral across cultures and history is a central question in morality science. While various moral theories exist, a generalizable structure of morality remains empirically untested. This registered report examines three questions: (i) What constitutes the conceptual structure of morality? (ii) Is this structure generalizable across diverse cultural contexts? (iii) Does it extend across both modern and ancient societies? To address these, we will recruit participants from 18 countries to rate moral actions along theoretically derived moral dimensions and use natural language processing to represent ancient minds in historical texts. The results would advance our understanding of the essence of morality and foster alignment between individuals, societies, and AI systems. 
                </div>
            </div>
            <div class="footer-box">
                    <div class="button-box">
                        <CustomButton>WangLab</CustomButton>
                        <CustomButton>YuLab</CustomButton>
                        <CustomButton>HuLab</CustomButton>
                    </div>
                </div>
        </div>
    </layout>
</template>

<style scoped>
.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 10px;
}

.lbox {
    display: block;
    grid-column: 1 / 7;
    position: relative;
}
.lbox img {
    display: block;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
}

.rbox {
    display: block;
    grid-column: 7 / 13;
}
.desc-box {
    display: block;
    width: 100%;
    margin: 0 0 20px 0;
    color: grey;
    text-align: justify;
    line-height: 1.5em;
    font-size: 24px;
}
.footer-box {
    display: block;
    grid-column: 6 / 13;
}
.button-box {
    display: flex;
    justify-content: space-between;
}

@media screen and (max-width: 1200px) {
    .container {
        max-width: 900px;
    }
    .desc-box {
        font-size: 18px;
    }
}

@media screen and (max-width: 900px) {
    .lbox {
        position: static;
        grid-column: 1 / 13;
    }
    .lbox img { position: static; transform: none; }

    .rbox { grid-column: 1 / 13; }
    .footer-box {
        grid-column: 1 / 5;
    }
    .button-box {
        text-align: center;
        flex-direction: column;
    }
    .button-box > div {
        margin: 0 0 10px 0;
    }
}
</style>
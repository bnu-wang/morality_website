<script setup lang="ts">
import layout from "../../layout/default.vue";
import CustomButton from "../../components/customButton.vue";
</script>

<template>
    <layout>
        <div style="margin: auto;">
            <div class="lbox"></div>
            <div class="rbox">
                <div class="desc-box">
                    What makes human actions moral or immoral across cultures and history is a central question in morality science. While various moral theories exist, a generalizable structure of morality remains empirically untested. This registered report examines three questions: (i) What constitutes the conceptual structure of morality? (ii) Is this structure generalizable across diverse cultural contexts? (iii) Does it extend across both modern and ancient societies? To address these, we will recruit participants from 18 countries to rate moral actions along theoretically derived moral dimensions and use natural language processing to represent ancient minds in historical texts. The results would advance our understanding of the essence of morality and foster alignment between individuals, societies, and AI systems. 
                </div>
                <div class="footer-box">
                    <div class="button-box">
                        <CustomButton>WangLab</CustomButton>
                        <CustomButton>YuLab</CustomButton>
                        <CustomButton>HuLab</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<style scoped>
:deep(.el-main) {
    text-align: center;
}

.lbox {
    --scale: 4;
    display: inline-block;
    width: calc(194px * var(--scale));
    height: calc(165px * var(--scale));
    background-image: url("./image/2025032801.png");
    background-size: contain;
}
.rbox {
    display: inline-block;
    width: 600px;
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
.footer-box .button-box {
    display: flex;
    justify-content: space-between;
}

@media screen and (max-width: 1450px) {
    .lbox { --scale: 3; display: block; margin: auto; }
}

@media screen and (max-width: 800px) {
    .lbox {
        --scale: 2;
    }
    .rbox {
        width: 500px;
    }
    .desc-box {
        font-size: 18px;
    }
}

@media screen and (max-width: 520px) {
    .lbox { --scale: 2; }
    .rbox { width: 95%; }
    .desc-box { font-size: 14px; }
    .footer-box .button-box {
        flex-direction: column;
    }
    .cho-button {
        margin: 0 0 10px 0;
    }
}

</style>
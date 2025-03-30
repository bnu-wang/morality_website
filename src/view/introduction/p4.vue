<script setup lang="ts">
import CustomSlider from '../../components/customSlider1.vue';


</script>

<template>
    <CustomSlider>
        <template #title>
            <h1>Origins and Evolution of Ethics</h1>
        </template>
        <template #content>
            <div class="container">
                <div class="lbox">
                    <img :src="`./assets/image/2025033001.png`" alt="">
                </div>
                <div class="rbox">
                    <p>From the Code of Hammurabi, rooted in justice and retribution, to Confucian "仁" (rén) emphasizing
                        compassion and interpersonal harmony, and from natural law grounded in divine and universal
                        order to modern notions of human rights and the ethical dilemmas posed by AI, the journey of
                        ethics reflects both continuity and transformation. While the core principles of fairness,
                        justice, and responsibility seem timeless, their interpretations and applications shift with
                        societal needs and technological advancements. This invites us to explore whether the moral
                        frameworks of ancient and modern worlds share a universal structure, or if they are shaped
                        entirely by their unique contexts.</p>
                    <h2>Do ancient and modern cultures share the same conceptual structure of morality?</h2>
                </div>
            </div>
        </template>
    </CustomSlider>
</template>

<style lang="css" scoped>
.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 10px;
}

.lbox {
    grid-column: 1 / 7;
}

.rbox {
    grid-column: 7 / 13;
}

.lbox img {
    width: 100%;
}

.rbox p {
    color: grey;
    font-size: 20px;
    line-height: 1.5em;
    text-align: justify;
}

@media screen and (max-width: 1200px) {
    .container {
        max-width: 900px;
    }

    .lbox {
        grid-column: 1 / 6;
    }

    .rbox {
        grid-column: 6 / 13;
    }

    .rbox p {
        font-size: 16px;
    }
}

@media screen and (max-width: 900px) {
    .lbox {
        grid-column: 1 / 13;
    }
    .rbox {
        grid-column: 1 / 13;
    }
}
</style>

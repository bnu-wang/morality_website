<script setup lang="ts">
import CustomSlider from '../../components/customSlider3.vue';


</script>

<template>
    <CustomSlider>
        <div class="container">
            <div class="text-box">
                <h1>What’s the conceptual structure of morality?</h1>
                <p>Beyond the insights of ancient thinkers, modern scientific disciplines are also deeply interested in the topic of morality. Psychology explores moral judgment and development, sociology examines morality in cultural and social systems, and neuroscience studies its biological basis in the brain. Education focuses on cultivating moral awareness, while economics investigates trust, fairness, and cooperation in decision-making…….</p>
            </div>
            <div class="img-box">
                <img :src="'./assets/image/2025032907.png'" alt="">
            </div>
        </div>
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

.text-box {
    grid-column: 1 / 6;
}
.text-box p {
    text-align: justify;
    line-height: 2em;
    font-size: 20px;
    color: grey;
}

.img-box {
    grid-column: 6 / 13;
}
.img-box img {
    width: 100%;
}

@media screen and (max-width: 1200px) {
    .container {
        max-width: 900px;
    }
    .text-box p {
        font-size: 16px;
        line-height: 1.5em;
    }
}

@media screen and (max-width: 900px) {
    .text-box {
        grid-column: 1 / 13;
    }
    .img-box {
        grid-column: 1 / 13;
    }
}
</style>

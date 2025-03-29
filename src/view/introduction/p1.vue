<script setup lang="ts">
import CustomSlider1 from '../../components/customSlider1.vue';
import InteractionAvator from './components/InteractionAvator.vue';


</script>

<template>
    <CustomSlider1>
        <template #title>
            <h1>Essence of morality</h1>
        </template>
        <template #content>
            <div class="container">
                <div class="avator"><InteractionAvator></InteractionAvator></div>
                <div class="text">
                    <p>Philosophers and religious scriptures, shaped by their own historical contexts, have different interpretations of morality. Much like the parable of the blind men and the elephant, each perspective reveals only one aspect of morality, offering a unique angle on this complex concept.</p>
                    <p>While these perspectives differ greatly, together they weave a richer understanding of morality, reflecting its complexity and multidimensional nature. Perhaps the true essence of morality lies in the convergence of these diverse viewpoints, offering us a more comprehensive lens through which to explore this timeless concept.</p>
                </div>
            </div>
        </template>
    </CustomSlider1>
</template>

<style lang="css" scoped>
.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 10px;
}

.avator {
    grid-column: 1 / 7;
}
.text {
    grid-column: 7 / 13;
    text-align: justify;
    font-size: 24px;
    color: grey;
}

@media screen and (max-width: 1200px) {
    .container {
        max-width: 900px;
    }
    .text {
        font-size: 18px;
        grid-column: 7 / 12;
    }
}

@media screen and (max-width: 900px) {
    .avator { grid-column: 1 / 13; }
    .text { grid-column: 1 / 13; }
}
</style>
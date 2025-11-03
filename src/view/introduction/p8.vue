<script setup lang="ts">
import InteractionAvator from './components/InteractionAvator.vue';
</script>

<template>
    <div class="container">
        <div class="title">
            <h1>What is the essence of human morality?</h1>
            <p>Do you know what morality is in the eyes of philosophers and religious scriptures?</p>
        </div>
        <div class="interaction">
            <InteractionAvator />
        </div>
        <div class="desc">
            <p>
                Philosophers and religious scriptures, shaped by their own historical contexts, have different interpretations of morality.
            </p>
            <p>
                <strong>Much like a single piece in a vast jigsaw puzzle</strong>, each perspective reveals only one aspect of morality, offering a unique angle on this complex concept.
            </p>
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
    grid-column: 1 / 13;
}
.interaction {
    grid-column: 1 / 13;
}
.desc {
    grid-column: 1 / 13;
}

.title h1 {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    line-height: 1.5em;
}
.title p {
    font-size: 28px;
    font-weight: 400;
    text-align: center;
    line-height: 1.5em;
}
.desc {
    padding: 20px 85px;
    background-image: url("/assets/image/2025102901.png");
    background-repeat: no-repeat;
    background-size: covers;
    font-size: 28px;
    font-weight: 500;
    text-align: left;
    line-height: 1.5em;
}

p {
    font-size: 28px;
    line-height: 1.5em;
    font-weight: 300;
}
</style>

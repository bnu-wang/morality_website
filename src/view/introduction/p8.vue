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
    grid-column: 2 / 12;
}
</style>

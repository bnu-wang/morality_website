<script setup lang="ts">
import LazyImage from '../../components/LazyImage.vue';

</script>

<template>
    <div class="container">
        <div class="a">
            <LazyImage :src="`./assets/image/2025121601.png`"></LazyImage>
        </div>
        <div class="b">
            <p>
                To understand why human morality is both universal (shared by everyone) yet diverse (unique to each culture), we analyze this map at two levels:
            </p>
            <p>
                <strong>Global Topology: Finding the Shared Structure</strong> Think of this as the “skeleton" of human morality. We are looking for the big picture—the underlying structural patterns that remain consistent across different cultures. It answers the question: What is the universal framework of evil and good?
            </p>
            <p>
                <strong>Local Geometry: Exploring Cultural Nuances</strong> Think of this as the unique “terrain". Here, we zoom in to see how specific environments and cultural backgrounds shift the distance between moral actions. It answers the question: How does your specific culture reshape the details of this moral map?
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
    grid-column-gap: 30px;
}

.a, .b {
    grid-column: 1 / 13;
    font-size: 26px;
    line-height: 1.5em;
    font-weight: 500;
}

@media (max-width: 600px) {
    .container {
        grid-column-gap: 10px;
        padding: 0 15px;
    }
    .a, .b {
        grid-column: 1 / 13;
        font-size: 14px;
        line-height: 1.5em;
        font-weight: 500;
    }
}
</style>

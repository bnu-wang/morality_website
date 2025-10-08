<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="title">
            <h2>Study3: Universal structure of morality across histories</h2>
        </div>
        <div class="m">
            <img :src="'./assets/image/2025100105.png'" alt="" srcset="">
            <p>How do we know if our modern ideas of "good" and "evil" are the same as those held by people centuries ago?</p>
            <p>
                We developed a context-referent labeling (CRL) approach. Instead of simulating ancient human raters, we instructed LLMs to evaluate actions based explicitly on historical context. Each action was rated using descriptive texts provided for reference.
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
    grid-column: 2 / 12;
    text-align: center;
}
.m {
    grid-column: 2 / 12;
}

img {
    width: 100%;
}
</style>

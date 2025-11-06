<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="title">
            <h2>SIS model can be replicated in ancient times</h2>
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
    font-size: 24px;
}

.title {
    grid-column: 1 / 13;
    text-align: center;
}

.title h2 {
    font-weight: bold;
}
.m {
    grid-column: 1 / 13;
    line-height: 1.5em;
}

img {
    width: 100%;
}
</style>

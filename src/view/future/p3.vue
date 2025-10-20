<script setup lang="ts">

</script>

<template>
    <div class="cb">
        <div class="container">
            <div class="title">
                <h1>Far-reaching implication</h1>
            </div>
            <div class="img">
                <img :src="'./assets/image/2025100730.png'" alt="">
            </div>
            <div class="desc">
                <p>Our work holds far-reaching implications—from advancing our understanding of morality's origins in
                    primates and its development in children, to guiding the creation of AI systems that align with core
                    human values.</p>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-rows: min-content;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 10px;
    font-size: 24px;
}

.title {
    grid-column: 1 / 13;
    text-align: center;
}

.img,
.desc {
    grid-column: 1 / 13;
}

.img img {
    width: 100%;
}

.desc p {
    font-size: 26px;
    line-height: 32px;
}
</style>

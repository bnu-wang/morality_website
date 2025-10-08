<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="title">
            <h1>We aim to build a model with PRAGMATIC value</h1>
        </div>
        <div class="desc">
            <ul>
                <li>
                    <p>
                        <span class="u s">Explore commonness:</span> what is the shared conceptual structure of morality?
                    </p>
                    <p style="text-indent: -1em;">Using <span class="s">a data-driven and integrative approach</span> with dimensions from dozens of prior models</p>
                    <p class="i">Across space: contemporary subjects from across the globe</p>
                    <p class="i">Across time: texts from ancient cultures</p>
                </li>
                <li>
                    <p>
                        <span class="u s">Quantify variation:</span> how people emphasize different aspects of morality?
                    </p>
                    <p class="i">Across space → cultural comparisons</p>
                    <p class="i">Across time → historical evolution</p>
                </li>
                <li>
                    <p>
                        <span class="u s">Provide insightful guidance:</span> how to align AI’s ethical value on 3-dim to ensure safety?
                    </p>
                </li>
            </ul>
        </div>
        <div class="m">
            <img :src="'./assets/image/2025100716.png'" alt="" srcset="">
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
    text-align: center;
}
.desc,
.m {
    grid-column: 1 / 13;
}

.desc ul {
    list-style-type: square;
}
.m img {
    width: 100%;
    height: 100%;
}

.u {
    text-decoration: underline;
}
.s {
    font-weight: bolder;
}
.i {
    text-indent: 2em;
}
</style>

<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="title">
            <h2>Human use the SIS model to navigate the moral space.</h2>
        </div>
        <div class="a">
            <img :src="'./assets/image/2025100731.png'" alt="" srcset="">
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

.title, .a {
    display: block;
    grid-column: 3 / 11;
    text-align: center;
}
.a img {
    width: 85%;
}
</style>

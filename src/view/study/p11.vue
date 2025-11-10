<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="title">
            <h1>Humans use the SIS model to navigate the moral space.</h1>
        </div>
        <div class="a">
            <img :src="'./assets/image/2025100731new.png'" alt="" srcset="">
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
    font-size: 22px;
}

.title, .a {
    display: block;
    grid-column: 1 / 13;
    text-align: center;
}

.title h1 {
    font-weight: bold;
}
.a img {
    width: 85%;
}
</style>


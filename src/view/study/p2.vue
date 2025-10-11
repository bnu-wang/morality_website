<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="title">
            <h1>Materials: A comprehensive sample of moral actions</h1>
        </div>
        <div class="a">
            <img :src="'./assets/image/2025100732.png'" alt="" srcset="">
            <img :src="'./assets/image/2025100733.png'" alt="" srcset="">
            <img :src="'./assets/image/2025100734.png'" alt="" srcset="">
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
    grid-column: 1 / 13;
}
.a img {
    width: 100%;
    margin: 15px 0;
}
</style>

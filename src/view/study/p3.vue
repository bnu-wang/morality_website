<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="title">
            <h2>Materials: A comprehensive set of morally relevant features</h2>
        </div>
        <div class="a">
            <img :src="'./assets/image/2025100735.png'" alt="" srcset="">
            <img :src="'./assets/image/2025100736.png'" alt="" srcset="">
            <img :src="'./assets/image/2025100737.png'" alt="" srcset="">
            <div class="more">Read more—</div>
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
    grid-column: 3 / 11;
}
.a {
    grid-column: 3 / 11;
    position: relative;
}

.a img {
    width: 100%;
    margin: 15px 0;
}
.a .more {
    position: absolute;
    bottom: 22px;
    left: 160px;
    text-decoration: underline;
    cursor: pointer;
}
</style>

<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="title">
            <h2>Study3: Universal structure of morality across histories</h2>
        </div>
        <div class="left">
            <img :src="'./assets/image/2025100106.png'" alt="" srcset="">
            <p>
                The connection between these maps is incredibly strong. Corresponding dimensions were show significantly correlations (evil: r > 0.79, P < 0.001; good: r > 0.74, P < 0.001).
            </p>
            <p>
                This powerful alignment suggests one compelling conclusion: despite the vast passage of time, a shared moral framework has endured in Chinese culture, connecting the past to the present.
            </p>
        </div>
        <div class="right">
            <p>
                PCA identified the three shared dimensions for both evil and good actions in ancient China.
            </p>
            <img :src="'./assets/image/2025100107.png'" alt="" srcset="">
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
.left {
    grid-column: 2 / 7;
    font-size: 20px;
    line-height: 28px;
}
.right {
    grid-column: 7 / 12;
    font-size: 20px;
    line-height: 28px;
}

img {
    width: 100%;
}
</style>

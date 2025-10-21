<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="h">
            <p>
                Cultural Comparisons between the United States and China
            </p>
        </div>
        <div class="a">
            <img :src="'./assets/image/2025102111.png'" alt="" srcset="">
        </div>
        <div class="b">
            <p>
                We found that people in the United States and China focus on different things when judging what is wrong or ugly.
            </p>
            <p>
                Americans care more about how actions affect other people, while Chinese people pay more attention to how actions affect society and themselves. However, when it comes to judging what is right or beautiful, people in both countries have more similar views—except that Chinese people see acts of dedication as especially beautiful.
            </p>
        </div>
        <div class="c">
            <img :src="'./assets/image/2025102112.png'" alt="" srcset="">
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: min-content;
    grid-column-gap: 10px;
}

.h, .c { grid-column: 1 / 13; }
.a { grid-column: 1 / 7; }
.b { grid-column: 7 / 13; }

.h p {
    font-size: 40px;
    line-height: 1.5em;
    font-weight: 700;
}
.b p {
    font-size: 22px;
    line-height: 1.5em;
    font-weight: 300;
}

img {
    width: 100%;
}
</style>


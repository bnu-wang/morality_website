<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="t">
            <p>Geometric symmetry between the <span style="color: #C00000;">Evil</span> and <span style="color: #027D33;">Good</span></p>
        </div>
        <div class="a">
            <img :src="'./assets/image/2025102108new.png'" alt="" srcset="">
        </div>
        <div class="c">
            <p>
                By identifying several pairs of actions that are highly symmetric—meaning they involve similar situations but opposite moral values—we found that each good action’s score on a moral dimension (like caring for others) was strongly linked to its evil counterpart (like harming others) on the matching dimension, but not on the other axes. 
            </p>
        </div>
        <div class="t">
            <p>Link between <span style="font-style: italic;">up-stream</span> and <span style="font-style: italic;">down-stream</span></p>
        </div>
        <div class="e">
            <img :src="'./assets/image/2025102110new.png'" alt="" srcset="">
        </div>
        <div class="f">
            <p>
                We found that the way people mentally organize ideas about good and evil is closely linked to how they make moral decisions. People who think about moral actions in similar ways also tend to make similar choices when faced with moral dilemmas. This means that the structure of our moral beliefs shapes the way we judge right and wrong in real-life situations.
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
    grid-template-rows: min-content;
    grid-column-gap: 0px;
    font-size: 22px;
}

.t { grid-column: 1 / 13; }
.a { grid-column: 1 / 13; grid-row: 2 / 3; }
.c { grid-column: 1 / 13; grid-row: 3 / 4; }
.e { grid-column: 1 / 7; grid-row: 6 / 7; }
.f { grid-column: 7 / 13; grid-row: 6 / 7; }

.t p {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
}
.c p {
    font-size: 26px;
    font-weight: 300;
    line-height: 1.5em;
}
.f p {
    margin: 0 0 0 15px;
    text-align: justify;
    font-size: 26px;
    font-weight: 300;
    line-height: 1.5em;
}

img {
    width: 100%;
}
.a img {
    width: 100%;
}
.e img {
    width: 100%;
}
</style>

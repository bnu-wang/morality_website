<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="top-left">
            <p>Papers since 1899  (n = 59,381)</p>
            <img :src="'./assets/image/2025100713.png'" alt="">
        </div>
        <div class="top-right">
            <h1>Multidisciplinary concern</h1>
            <p>Beyond the insights of humanities, modern scientific disciplines are also deeply interested in morality.</p>
            <ul>
                <li>
                    <p>Psychology explores the psychological mechanisms underlying moral judgment and development.</p>
                </li>
                <li>
                    <p>Sociology examines morality in cultural and social systems.</p>
                </li>
                <li>
                    <p>Neuroscience studies its biological basis in the brain. </p>
                </li>
                <li>
                    <p>Economics investigates trust, fairness, and cooperation in decision-making at both micro- and macro level</p>
                </li>
                <li style="list-style: none;"><p>…….</p></li>
            </ul>
        </div>
        <div class="desc">
            <p>We integrate theories from various disciplines and classical viewpoints of religious philosophy, summarizing the key characteristics of important moral concepts, which represent various domains, including behavioral outcomes, normative principles, social interactions, agent perception, and moral emotions.</p>
        </div>
        <div class="img">
            <img :src="'./assets/image/2025100712.png'" alt="">
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

.top-left {
    grid-column: 1 / 5;
}
.top-right {
    grid-column: 6 / 13;
}
.desc {
    grid-column: 1 / 13;
}
.img {
    grid-column: 1 / 13;
}

img {
    width: 100%;
}
</style>

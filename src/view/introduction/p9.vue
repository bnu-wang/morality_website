<script setup lang="ts">

</script>

<template>
    <div class="container">
        <div class="left">
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
                    <p>Economics investigates trust, fairness, and cooperation in decision-making at both micro- and
                        macro level</p>
                </li>
                <li style="list-style: none;">
                    <p style="margin: 0;">…….</p>
                </li>
            </ul>
            <div class="img">
                <img :src="'./assets/image/Multidisciplinary.png'" alt="">
            </div>
            <div class="desc">
                <p>We integrate theories from various disciplines and classical viewpoints of religious philosophy,
                summarizing the key characteristics of important moral concepts, which represent various domains,
                including behavioral outcomes, normative principles, social interactions, agent perception, and moral
                emotions.</p>
            </div>
        </div>
        <div class="right">
            <img :src="'./assets/image/2025102101.png'" alt="">
        </div>
    </div>
</template>

<style lang="css" scoped>
.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 20px;
    font-family: "PingFang SC";
    font-size: 20px;
    line-height: 1.5em;
    font-weight: 300;
}

.left {
    grid-column: 1 / 8;
}
.right {
    display: flex;
    align-items: center;
    grid-column: 8 / 13;
}

.left .img img { width: 80%; }
.left .img {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

img {
    width: 100%;
}

/* 移动端适配 */
@media (max-width: 600px) {
    .container {
        grid-column-gap: 10px;
        font-size: 14px;
        padding: 0 15px;
    }

    .left {
        grid-column: 1 / 13;
    }

    .right {
        grid-column: 1 / 13;
        margin-top: 20px;
    }

    .left h1 {
        font-size: 20px;
        line-height: 1.4em;
        margin: 15px 0;
    }

    .left p {
        font-size: 14px;
        line-height: 1.5em;
    }

    .left ul {
        padding-left: 20px;
    }

    .left .img img {
        width: 100%;
    }
}
</style>



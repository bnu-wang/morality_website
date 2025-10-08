<script setup lang="ts">
import { reactive } from 'vue';

type Person = {
    name: string,
    avatar: string,
    desc: string,
    viewpoint: string
}

const l: Array<Person> = [
    { name: "Plato", avatar: "2025100720.jpg", desc: "Greek philosopher. Founded Academy Advanced theory of forms", viewpoint: "This, then, which imparts truth to the known and the power of knowing to the knower, is what I would have you term the idea of good" },
    { name: "Kant", avatar: "2025100721.png", desc: "German philosopher. Developed deontological ethics, categorical imperative.", viewpoint: "Act only according to that maxim whereby you can at the same time will that it should become a universal law." },
    { name: "Darwin", avatar: "2025100722.jpg", desc: "English naturalist. Proposed evolution by natural selection", viewpoint: "Any animal whatever, endowed with well-marked social instincts, would inevitably acquire a moral sense or conscience, as soon as its intellectual powers had become as well, or nearly as well developed, as in man." },
    { name: "Piaget", avatar: "2025100723.png", desc: "Swiss psychologist. Pioneered cognitive developmental stage theory.", viewpoint: "The rule of justice is a sort of immanent condition of social relationships or a law governing their equilibrium." },
    { name: "Kohlberg", avatar: "2025100724.jpg", desc: "American psychologist. Proposed stages of moral development.", viewpoint: "At heart, these are universal principles of justice, of the reciprocity and equality of human rights, and of respect for the dignity of human beings as individual persons." },
];
const r: Array<Person> = [
    { name: "Mead", avatar: "2025100725.png", desc: "American anthropologist. Studied culture and personality development.", viewpoint: "We are forced to conclude that human nature is almost unbelievably malleable, responding accurately and contrastingly to contrasting cultural conditions." },
    { name: "Malinowski", avatar: "2025100726.png", desc: "Polish anthropologist. Founded functionalism in cultural anthropology.", viewpoint: "The natives have a word, yotile, which means ‘a good man,’ but its primary meaning is ‘generous’... Another word, nogila, means ‘a bad man,’ and its primary meaning is ‘stingy." },
    { name: "Shweder", avatar: "2025100727.jpg", desc: "American anthropologist.  Advanced cultural psychology and moral diversity.", viewpoint: "There are at least three major types of moral discourse in the world, which are unevenly distributed in the various cultural traditions. " },
    { name: "Haidt", avatar: "2025100728.png", desc: "American psychologist. Developed moral foundations theory.", viewpoint: "Cultures can all talk about ‘sweetness,’ but they can create different desserts. Likewise, many societies can talk about justice, but they can build different just societies" },
    { name: "Henrich", avatar: "2025100729.png", desc: "Canadian anthropologist.  Studied cultural evolution and non-WEIRD psychology.", viewpoint: "The degree of fairness and willingness to punish unfairness varied dramatically across societies... For example, among the Lamalera of Indonesia, who are whale hunters in large cooperative crews, hyper-fair offers in the Ultimatum Game were common... In contrast, the Machiguenga of the Amazon... showed little concern for fairness." },
];

const curr = reactive({
    avator: "https://empty",
    word: "please select"
})
const click = (e: Person) => {
    curr.avator = `./assets/image/${e.avatar}`;
    curr.word = e.viewpoint;
}
</script>

<template>
    <div class="container">
        <div class="title">
            <h1>Current debate: universalism vs diversity</h1>
        </div>
        <div class="left">
            <h2 style="color: #008080;">Proponents for universalism</h2>
            <div class="list">
                <template v-for="item in l" :key="item.name">
                    <div class="m-box" style="background-color: #008080;" @click="click(item)">
                        <div class="avatar" :style="`--url: url(./assets/image/${item.avatar})`"></div>
                        <div class="t-box">
                            <div class="t">{{ item.name }}</div>
                            <div class="d">{{ item.desc }}</div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <div class="mid">
            <h2>who's viewpoint</h2>
            <div class="show">
                <el-avatar :size="128" :src="curr.avator">
                    <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt=""></img>
                </el-avatar>
                <p style="text-align: justify; font-size: 18px; line-height: 32px;">{{ curr.word }}</p>
            </div>
            <div style="text-decoration: underline;">Click on the debater you're interested in to view their viewpoints.</div>
        </div>
        <div class="right">
            <h2 style="color: #FF7F50;">Proponents for diversity</h2>
            <div class="list">
                <template v-for="item in r" :key="item.name">
                    <div class="m-box" style="background-color: #FF7F50;" @click="click(item)">
                        <div class="avatar" :style="`--url: url(./assets/image/${item.avatar})`"></div>
                        <div class="t-box">
                            <div class="t">{{ item.name }}</div>
                            <div class="d">{{ item.desc }}</div>
                        </div>
                    </div>
                </template>
            </div>
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
.left {
    grid-column: 1 / 5;
}
.mid {
    grid-column: 5 / 9;
}
.right {
    grid-column: 9 / 13;
}

.mid {
    display: flex;
    height: 90%;
    margin: auto;
    flex-direction: column;
    justify-content: space-around;
}
.mid .show {
    flex-grow: 1;
    display: block;
    margin: 25px 0;
    padding: 15px;
    box-sizing: content-box;
    background-color: #3C4C68;
    border-radius: 35px;
    text-align: center;
}

.m-box {
    padding: 16px;
    margin: 25px 0;
    border-radius: 15px;
}
.m-box .avatar {
    display: inline-block;
    width: 64px;
    height: 64px;
    margin: 0 15px 0 0;
    background-image: var(--url);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    vertical-align: middle;
}
.m-box .t-box {
    display: inline-block;
    width: calc(100% - 80px);
    vertical-align: middle;
}
.m-box .t-box .t {
    font-size: 32px;
    line-height: 48px;
}
.m-box .t-box .d {
    font-size: 16px;
}
</style>

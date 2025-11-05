<script setup lang="ts">
import { reactive } from 'vue';

type Person = {
    name: string,
    avatar: string,
    desc: string,
    viewpoint: string
}

const l: Array<Person> = [
    { name: "Plato", avatar: "2025101101.png", desc: "Greek philosopher. Founded Academy Advanced theory of forms.", viewpoint: "This, then, which imparts truth to the known and the power of knowing to the knower, is what I would have you term the idea of good." },
    { name: "Kant", avatar: "2025101102.png", desc: "German philosopher. Developed deontological ethics, categorical imperative.", viewpoint: "Act only according to that maxim whereby you can at the same time will that it should become a universal law." },
    { name: "Darwin", avatar: "2025101103.png", desc: "English naturalist. Proposed evolution by natural selection.", viewpoint: "Any animal whatever, endowed with well-marked social instincts, would inevitably acquire a moral sense or conscience, as soon as its intellectual powers had become as well, or nearly as well developed, as in man." },
    { name: "Piaget", avatar: "2025101104.png", desc: "Swiss psychologist. Pioneered cognitive developmental stage theory.", viewpoint: "The rule of justice is a sort of immanent condition of social relationships or a law governing their equilibrium." },
    { name: "Kohlberg", avatar: "2025101105.png", desc: "American psychologist. Proposed stages of moral development.", viewpoint: "At heart, these are universal principles of justice, of the reciprocity and equality of human rights, and of respect for the dignity of human beings as individual persons." },
];
const r: Array<Person> = [
    { name: "Mead", avatar: "2025101106.png", desc: "American anthropologist. Studied culture and personality development.", viewpoint: "We are forced to conclude that human nature is almost unbelievably malleable, responding accurately and contrastingly to contrasting cultural conditions." },
    { name: "Malinowski", avatar: "2025101107.png", desc: "Polish anthropologist. Founded functionalism in cultural anthropology.", viewpoint: "The natives have a word, yotile, which means ‘a good man,’ but its primary meaning is ‘generous’... Another word, nogila, means ‘a bad man,’ and its primary meaning is ‘stingy." },
    { name: "Shweder", avatar: "2025101108.png", desc: "American anthropologist.  Advanced cultural psychology and moral diversity.", viewpoint: "There are at least three major types of moral discourse in the world, which are unevenly distributed in the various cultural traditions. " },
    { name: "Haidt", avatar: "2025101109.png", desc: "American psychologist. Developed moral foundations theory.", viewpoint: "Cultures can all talk about ‘sweetness,’ but they can create different desserts. Likewise, many societies can talk about justice, but they can build different just societies." },
    { name: "Henrich", avatar: "2025101110.png", desc: "Canadian anthropologist.  Studied cultural evolution and non-WEIRD psychology.", viewpoint: "The degree of fairness and willingness to punish unfairness varied dramatically across societies... For example, among the Lamalera of Indonesia, who are whale hunters in large cooperative crews, hyper-fair offers in the Ultimatum Game were common... In contrast, the Machiguenga of the Amazon... showed little concern for fairness." },
];

const curr = reactive({
    author: "",
    avator: "https://empty",
    word: ""
})
const click = (e: Person) => {
    curr.avator = `./assets/image/${e.avatar}`;
    curr.word = e.viewpoint;
    curr.author = e.name;
}
</script>

<template>
    <div class="container">
        <div class="title">
            <h1>Current debate: universalism vs diversity</h1>
        </div>
        <div class="left">
            <h2 style="color: #008080; text-align: left;">Proponents for<br>universalism</h2>
            <div class="list">
                <template v-for="item in l" :key="item.name">
                    <div class="m-box" style="background-color: #008080;" @click="click(item)">
                        <div class="avatar">
                            <img :src="`./assets/image/${item.avatar}`" alt="" srcset="">
                        </div>
                        <div class="t-box">
                            <div class="t">{{ item.name }}</div>
                            <div class="d">{{ item.desc }}</div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <div class="mid">
            <h1>{{ curr.author ? curr.author : "who" }}'s viewpoint</h1>
            <div style="text-decoration: underline; font-size: 20px; color: #fdd912;">Click on the debater you're
                interested in
                to view their viewpoints.</div>
            <div class="show">
                <el-avatar :size="154" :src="curr.avator">
                    <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt=""></img>
                </el-avatar>
                <p>{{ curr.word }}</p>
            </div>
        </div>
        <div class="right">
            <h2 style="color: #FF7F50; text-align: right;">Proponents for <br>diversity</h2>
            <div class="list">
                <template v-for="item in r" :key="item.name">
                    <div class="m-box" style="background-color: #FF7F50;" @click="click(item)">
                        <div class="avatar">
                            <img :src="`./assets/image/${item.avatar}`" alt="" srcset="">
                        </div>
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
    grid-template-rows: min-content;
    grid-column-gap: 20px;
}

.title {
    grid-column: 1 / 13;
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

.title h1 {
    font-size: 40px;
    line-height: 56px;
    font-weight: 700;
    text-align: center;
}

.left h2,
.right h2 {
    font-size: 32px;
    line-height: 45px;
    font-weight: 700;
}

.mid {
    height: 100%;
    margin: auto;
    text-align: center;
}

.mid h1 {
    font-size: 32px;
    line-height: 45px;
    font-weight: 700;
}

.mid .show {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 600px;
    margin: 25px 0;
    padding: 15px;
    box-sizing: content-box;
    background-color: #3C4C68;
    border-radius: 35px;
    text-align: center;
}

.mid .show p {
    text-align: center;
    font-size: 18px;
    line-height: 38px;
    font-weight: 500;
    padding: 0 20px;
}

.m-box {
    display: flex;
    width: 100%;
    height: 117px;
    justify-content: center;
    align-items: center;
    margin: 25px 0;
    border-radius: 15px;
    user-select: none;
    cursor: pointer;
}

.m-box .avatar {
    display: inline-block;
    width: 74px;
    margin: 0 15px 0 0;
    border-radius: 50%;
    vertical-align: middle;
}

.m-box .avatar img {
    width: 100%;
}

.m-box .t-box {
    display: inline-block;
    width: calc(100% - 128px);
    vertical-align: middle;
}

.m-box .t-box .t {
    font-size: 32px;
    line-height: 45px;
    font-weight: 700;
}

.m-box .t-box .d {
    font-size: 14px;
    line-height: 20px;
}
</style>

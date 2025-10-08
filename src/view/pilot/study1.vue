<script setup lang="ts">
import { newPlot } from 'plotly.js-dist';
import { onMounted, reactive, ref, type Reactive } from 'vue';

import customSlider from '../../components/customSlider2.vue';
import selectInput from '../../components/selectInput.vue';

const data: Reactive<{
    harm: any;
    sacrifice: any;
}> = reactive({
    harm: {
        words: []
    },
    sacrifice: {
        words: []
    }
});
const showDrawer1 = ref(false);
const showDrawer2 = ref(false);

const selectAction = (item: any) => {
    const { index, type } = item;
    if (type === "harm") {
        if (data.harm.data[0].text.length === data.harm.words.length) {
            data.harm.data[0].marker.size.push(20);
            data.harm.data[0].marker.color.push("rgba(218,253,89,1)");
            data.harm.data[0].marker.line.color.push("rgba(218,253,89,1)");
            data.harm.data[0].x.push(data.harm.data[0].x[index]);
            data.harm.data[0].y.push(data.harm.data[0].y[index]);
            data.harm.data[0].text.push(data.harm.data[0].text[index]);
        } else {
            const l = data.harm.data[0].text.length - 1;
            data.harm.data[0].x[l] = data.harm.data[0].x[index];
            data.harm.data[0].y[l] = data.harm.data[0].y[index];
            data.harm.data[0].text[l] = data.harm.data[0].text[index];
        }
        newPlot('plotly-graph1', data.harm);
    } else if (type === "sacrifice") {
        if (data.sacrifice.data[0].text.length === data.sacrifice.words.length) {
            data.sacrifice.data[0].marker.size.push(20);
            data.sacrifice.data[0].marker.color.push("rgba(253,89,89,1)");
            data.sacrifice.data[0].marker.line.color.push("rgba(253,89,89,1)");
            data.sacrifice.data[0].x.push(data.sacrifice.data[0].x[index]);
            data.sacrifice.data[0].y.push(data.sacrifice.data[0].y[index]);
            data.sacrifice.data[0].text.push(data.sacrifice.data[0].text[index]);
        } else {
            const l = data.sacrifice.data[0].text.length - 1;
            data.sacrifice.data[0].x[l] = data.sacrifice.data[0].x[index];
            data.sacrifice.data[0].y[l] = data.sacrifice.data[0].y[index];
            data.sacrifice.data[0].text[l] = data.sacrifice.data[0].text[index];
        }
        newPlot('plotly-graph2', data.sacrifice);
    }
}

const reload = () => {
    if (data.harm.data)
    data.harm.words = data.harm.data[0].text.map((item: string) => {
        return item.match(/<b><\/br>\s(?<dd>.*?)\s<\/b>/)?.groups?.dd.toLowerCase();
    }).map((item: string, index: number) => { return { value: item, index, type: "harm" } });
    if (data.sacrifice.data)
    data.sacrifice.words = data.sacrifice.data[0].text.map((item: string) => {
        return item.match(/<b><\/br>\s(?<dd>.*?)\s<\/b>/)?.groups?.dd.toLowerCase();
    }).map((item: string, index: number) => { return { value: item, index, type: "sacrifice" } });
}
onMounted(() => {
    import("@/assets/data/study1/harm.json?raw")
        .then(res => {
            data.harm = JSON.parse(res.default).x;
            newPlot('plotly-graph1', data.harm);
            reload();
        });
    import("@/assets/data/study1/sacrifice.json?raw")
        .then(res => {
            data.sacrifice = JSON.parse(res.default).x;
            newPlot('plotly-graph2', data.sacrifice);
            reload();
        });
});
</script>

<template>
    <div style="max-width: 1200px; margin: 0 auto;">
        <h1 id="study1">Study1: Self-Interpersonal-Society SIS model</h1>
        <div class="desc-box">
            <div class="desc">
                <p>Morality lies at the core of human society, shaping how people judge right from wrong. For centuries, religion and philosophy have guided moral thought through reflection and contemplation. In recent decades, morality has become a multidisciplinary topic, with contributions from philosophy, psychology, anthropology, and biology. To integrate these perspectives, we compiled 50 key features—28 immoral and 26 moral—from seven major theories across disciplines, capturing the core components of moral judgment.</p>
                <p class="read-more" @click="showDrawer1 = true">read more</p>
            </div>
            <div class="desc">
                <p>In Study 1, a large-scale survey (n = 1,327) asked U.S. participants to rate a wide range of moral and immoral actions. Using principal component analysis (PCA), we identified three key dimensions for each moral domain. For immoral actions: Unjust-Gain, Harm to Others, and Self-Indulgence; for moral actions: Sacrifice, Care for Others, and Self-Control. These six opposing factors reflect morality’s function across societal, interpersonal, and personal levels—together forming the SIS model (Societal, Interpersonal, Self). Compared to 15 leading theories, SIS showed the best data fit and cross-cultural generalizability.</p>
                <p class="read-more" @click="showDrawer2 = true">read more</p>
            </div>
        </div>
        <custom-slider>
            <h2>Interactive plot</h2>
            <p style="text-align: justify;">Hover the mouse over the circle to explore all 100 evil and 100 good actions and their positions in the SIS space. Zoom in on an area with the mouse by framing it (and double click the enlarged area to restore to the original size).</p>
            <div class="select-input-box">
                <select-input title="Select your evil action of interest" 
                              :items="data.harm.words"
                              @select="selectAction"></select-input>
                <select-input title="Select your good action of interest" 
                              :items="data.sacrifice.words"
                              @select="selectAction"></select-input>
            </div>
        </custom-slider>
        <div class="graph-box">
            <div class="graph">
                <div id="plotly-graph1" class="plotly"></div>
                <div class="legend">
                    <img src="@/assets/img/legend_harm.png" alt="">
                </div>
            </div>
            <div class="graph">
                <div id="plotly-graph2" class="plotly"></div>
                <div class="legend">
                    <img src="@/assets/img/legend_sacrifice.png" alt="">
                </div>
            </div>
        </div>
        <el-drawer 
            v-model="showDrawer1"
            direction="btt"
            size="80%">
            <img :src="'./assets/image/2025052904.png'" style="width: 100%;" />
            <p><strong>Existing theories in morality science.</strong> 50 conceptual features (28 for immoral, 26 for moral) were summarized from seven prominent theories across different disciplines, supplemented by key moral features. Red = Immoral features, Green = Moral features. Double arrows link features of moral and immoral that are considered semantically symmetrical, while dotted lines link features that are considered semantically identical.</p>
        </el-drawer>
        <el-drawer 
            v-model="showDrawer2"
            direction="btt"
            size="80%">
            <img :src="'./assets/image/2025052905.png'" style="width: 100%;" />
            <p><strong>Model comparison in the United States.</strong> a, To examine how well a model can represent all theoretical moral features, we used linear combinations of features in each model as regressors to predict each of the remaining theoretical features (that were not included in that model) and calculated the Bayesian Information Criterion (BIC). b, the model outperformed the other 15 existing models in data fitting.</p>
        </el-drawer>
    </div>
</template>

<style scoped>
.read-more {
    margin: 20px 0;
    opacity: .55;
    text-align: right;
    font-weight: 500;
    color: rgba(68, 76, 252, 1);
    cursor: pointer;
    vertical-align: middle;
}
.read-more::after {
    content: "";
    display: inline-block;
    width: 20px;
    height: 1px;
    margin: 0 5px;
    background-color: rgba(68, 76, 252, 1);
    vertical-align: middle;
}

.desc-box {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 30px;
}
.desc-box .desc {
    grid-column: span 6;
    text-align: justify;
    font-size: 24px;
    color: grey;
}

.select-input-box {
    display: flex;
    justify-content: space-around;
    margin: 20px auto;
}

.select-input-box .select-input {
    width: 300px;
    text-align: center;
}

.graph-box {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 20px auto;
}

.legend {
    width: 200px;
    margin: 20px auto;
}
.legend img {
    width: 100%;
}

@media screen and (max-width: 1200px) {
    .graph .plotly {
        width: 360px;
        height: 360px;
        transform-origin: top left;
        transform: scale(0.8);
    }
}

@media screen and (max-width: 900px) {
    .desc-box .desc {
        grid-column: 1 / 13;
    }

    .graph .plotly {
        width: 270px;
        height: 270px;
        transform: scale(0.6);
    }
}
</style>
<script setup lang="ts">
import { newPlot } from 'plotly.js-dist';
import { onMounted, reactive, ref, type Reactive } from 'vue';

import customSlider from '../../../components/customSlider2.vue';
import selectInput from '../../../components/selectInput.vue';

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
    <div style="margin: 0 auto;">
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
    </div>
</template>

<style scoped>
.select-input-box {
    display: flex;
    justify-content: space-around;
    margin: 20px auto;
}

.select-input-box .select-input-component {
    width: 230px;
    text-align: center;
}

:deep(.select-input-component .title) {
    font-size: 14px;
}

.graph-box {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 20px auto;
    background-color: white;
}

.graph-box .graph { 
    width: 270px;
    height: 349px;
    transform-origin: left top;
    transform: scale(0.6);
}

.legend {
    width: 350px;
    margin: 20px 60px;
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
    .graph .plotly {
        width: 270px;
        height: 270px;
        transform: scale(0.6);
    }
}
</style>
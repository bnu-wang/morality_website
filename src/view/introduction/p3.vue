<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { SuccessFilled, CircleCloseFilled } from '@element-plus/icons-vue';
import * as d3 from "d3";
import CustomSlider from '../../components/customSlider2.vue';

interface GeoFeature {
    type: "MultiPolygon",
    properties: {
        COUNTRY: string
    },
    geometry: d3.GeoGeometryObjects
}
interface GeoData {
    type: "FeatureCollection",
    name: string,
    crs: {
        type: string,
        properties: {
            name: string
        }
    },
    features: Array<GeoFeature>
}

const countries = [
    "China(mainland)",
    'Hong Kong SAR',
    "United States",
    "United Kingdom",
    "Australia",
    "South Africa",
    "Germany",
    "Japan",
    "Israel",
    "France",
    "Russian Federation",
    'Spain', 'Mexico', 'Chile',
    'Portugal', 'Brazil',
    'Egypt', 'Qatar',
    'India'
].sort();

const chooseCountry = ref<string>('China(mainland)');

const dom = ref<HTMLDivElement>();
onMounted(() => {
    if (dom.value == undefined) return;
    const svgW = dom.value.parentElement!.clientWidth;
    const svgH = svgW / 2;
    const padding = 10;

    const svg = d3.select(dom.value)
        .append("svg")
        .attr("width", svgW)
        .attr("height", svgH);

    import("../../assets/world.json")
        .then(r => r.default as any)
        .then((r: GeoData) => {
            console.log(r);
            const x0 = padding;
            const y0 = padding;
            const x1 = svgW - padding * 2;
            const y1 = svgH - padding * 2;
            const projection = d3.geoEquirectangular().fitExtent([[x0, y0], [x1, y1],], r as d3.ExtendedFeatureCollection);
            const pathGenerator: d3.GeoPath<any, d3.ExtendedFeature> = d3.geoPath().projection(projection);

            const mapPath = svg.append("g")
                .selectAll("path")
                .data(r.features, (d) => (d as GeoFeature).properties.COUNTRY)
                .join("path");
            mapPath.attr("d", pathGenerator)
                .attr("stroke-width", 0.2)
                .attr("stroke", "#fff")
                .style("cursor", (d) => countries.indexOf(d.properties.COUNTRY) >= 0 ? "pointer" : "#default")
                .attr("fill", (d) => countries.indexOf(d.properties.COUNTRY) >= 0 ? (d.properties.COUNTRY == chooseCountry.value ? "#ff00ff" : "#000000") : "#e3e3e3")
                .on("click", (d: { target: { __data__: GeoFeature } } ) => {
                    const data = d.target.__data__;
                    if (countries.indexOf(data.properties.COUNTRY) >= 0) {
                        chooseCountry.value = data.properties.COUNTRY;
                        mapPath.transition().duration(100)
                               .attr("fill", (d: GeoFeature) => countries.indexOf(d.properties.COUNTRY) >= 0 ? (d.properties.COUNTRY == chooseCountry.value ? "#ff00ff" : "#000000") : "#e3e3e3")
                    }
                })
        });
});
</script>

<template>
    <CustomSlider>
        <div class="container">
            <div class="lbox">
                <h2>Diversity of moral actions</h2>
                <p>Did you know? In the country: <strong>China</strong>, these actions are considered <span
                        style="color: lightcoral;">Evil</span> // <span style="color: lightgreen;">Good</span>!</p>
                <div ref="dom" class="svg"></div>
            </div>
            <div class="rbox">
                <div class="entries">
                    <div>
                        <el-icon style="color: red;"><CircleCloseFilled /></el-icon>
                        <p>Not supporting or caring for one's parents</p>
                        <p>Drug abuse</p>
                        <p>Prostitution</p>
                        <p>Gambling</p>
                        <p>Gun possession</p>
                    </div>
                    <div>
                        <el-icon style="color: #4EA72E;"><SuccessFilled /></el-icon>
                        <p>Filial piety towards parents</p>
                        <p>Diligent and frugal</p>
                        <p>Being dedicated to one's work</p>
                        <p>Humble and low-key</p>
                        <p>Selfless devotion</p>
                    </div>
                </div>
                <h2>Do different cultures share the same conceptual structure of morality?</h2>
            </div>
        </div>
    </CustomSlider>
</template>

<style lang="css" scoped>
.container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 10px;
}

.lbox {
    grid-column: 1 / 7;
}

.rbox {
    grid-column: 7 / 13;
}

.rbox .entries {
    padding: 10px 5px;
    box-sizing: border-box;
    border: 2px solid #000;
    border-radius: 25px;
    background-image: repeating-linear-gradient(0deg, #000 0%, #000 49%, transparent 50%, transparent 100%);
    background-repeat: repeat-y;
    background-size: 3px 10px;
    background-position: calc(50% - 1px) 0px;
}
.rbox .entries div {
    display: inline-block;
    width: calc(50% - 22px);
    padding: 0px 10px;
    text-align: center;
    font-size: 16px;
    vertical-align: top;
}
.rbox .entries div .el-icon {
    width: 100%;
    height: 48px;
}
.el-icon svg {
    width: 48px;
    height: 48px;
}

@media screen and (max-width: 1200px) {
    .container { max-width: 900px; }
}

@media screen and (max-width: 900px) {
    .lbox {
        grid-column: 1 / 13;
    }
    .rbox {
        grid-column: 1 / 13;
    }
}
</style>
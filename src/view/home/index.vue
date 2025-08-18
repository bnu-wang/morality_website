<script setup lang="ts">
import * as d3 from "d3";
import layout from "../../layout/default.vue";
import { onMounted, onUnmounted, ref, type Ref } from "vue";
import { ElButton } from "element-plus";

// function init() {
//     const nodes: Array<{
//         name: string;
//         x?: number | undefined;
//         y?: number | undefined;
//     }> = [
//             { name: "0" },
//             { name: "1" },
//             { name: "2" },
//             { name: "3" },
//             { name: "4" },
//             { name: "5" },
//             { name: "6" },
//             { name: "7" },
//             { name: "8" },
//             { name: "9" },
//         ];
//     const edges = [
//         { source: 0, target: 1 },
//         { source: 0, target: 2 },
//         { source: 1, target: 2 },
//         { source: 3, target: 4 },
//         { source: 3, target: 5 },
//         { source: 4, target: 5 },
//         { source: 6, target: 7 },
//         { source: 6, target: 8 },
//         { source: 6, target: 9 },
//         { source: 7, target: 8 },
//         { source: 8, target: 9 },
//     ];

//     const width = 500;
//     const height = 400;
//     const svg = d3.select(".container")
//         .append("svg")
//         .attr("width", width)
//         .attr("height", height)
//         .append("g");

//     const force = d3.forceSimulation(nodes)
//         .force("charge", d3.forceManyBody().strength(_ => -20))
//         .force("link", d3.forceLink(edges).distance(_ => 40))
//         .force("center", d3.forceCenter().x(250).y(200))

//     const color = d3.schemeCategory10;
//     var lines = svg.selectAll(".forceLine")
//         .data(edges as any as {
//             source: {
//                 x: number;
//                 y: number;
//             };
//             target: {
//                 x: number;
//                 y: number;
//             };
//         }[])
//         .enter()
//         .append("line")
//         .attr("class", "forceLine")
//         .style("stroke", "white")

//     var circles = svg.selectAll(".forceCircle")
//         .data(nodes)
//         .enter()
//         .append("circle")
//         .attr("class", "forceCircle")
//         .attr("r", 5)
//         .style("fill", (_, i) => color[i])

//     var texts = svg.selectAll(".forceText")
//         .data(nodes)
//         .enter()
//         .append("text")
//         .attr("class", "forceText")
//         .attr("x", d => d.x ?? 0)
//         .attr("y", d => d.y ?? 0)
//         .attr("dy", ".3em")
//         .text(d => d.name)

//     force.on("tick", () => {
//         console.log(lines.data());

//         //更新连线的端点坐标 
//         lines.attr("x1", function (d) { return d.source.x; });
//         lines.attr("y1", function (d) { return d.source.y; });
//         lines.attr("x2", function (d) { return d.target.x; });
//         lines.attr("y2", function (d) { return d.target.y; });

//         //更新节点坐标 
//         circles.attr("cx", function (d) { return d.x ?? 0; });
//         circles.attr("cy", function (d) { return d.y ?? 0; });

//         //更新节点文字的坐标 
//         texts.attr("x", function (d) { return d.x ?? 0; });
//         texts.attr("y", function (d) { return d.y ?? 0; });
//     });

//     const drag = d3.drag<any, any>()
//         .on("start", function (event, d) {
//             if (!event.active) force.alphaTarget(0.3).restart();
//             d.fx = d.x;
//             d.fy = d.y;
//         })
//         .on("drag", function (event, d) {
//             d.fx = event.x;
//             d.fy = event.y;
//             d3.select(this).style("fill", "yellow");
//         })
//         .on("end", function (event, d) {
//             if (!event.active) force.alphaTarget(0);
//             d.fx = null;
//             d.fy = null;
//             d3.select(this).style("fill", color[d.index]);
//         });
//     circles.call(drag);
// }

type NodeInfo = {
    name: string;
    x: number;
    y: number
};
const nodes: Array<NodeInfo> = [
    { name: "Counterfeit", x: 70, y: 30 },
    { name: "Corruption", x: 50, y: 50 },
    { name: "Theft", x: 85, y: 60 },
    { name: "Evade-taxes", x: 120, y: 55 },
    { name: "Murder", x: 55, y: 80 },
    { name: "Kidnap", x: 30, y: 120 },
    { name: "Fight", x: 80, y: 100 },
    { name: "Voyeurism", x: 90, y: 90 },
    { name: "Prostitution", x: 130, y: 70 },
    { name: "Gamble", x: 110, y: 95 },
];
const edges: Array<{
    source: number;
    target: number;
} | {
    source: NodeInfo;
    target: NodeInfo;
    index: number
}> = [
    { source: 0, target: 1 },
    { source: 0, target: 2 },
    { source: 0, target: 3 },
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 4, target: 5 },
    { source: 4, target: 6 },
    { source: 5, target: 6 },
    { source: 7, target: 8 },
    { source: 7, target: 9 },
    { source: 8, target: 9 },
];

let contine_f = true;
function frame() {
    const ctx = dom.value.getContext("2d");
    if (!ctx) return;
    ctx.strokeStyle = "#fff";
    ctx.fillStyle = "#fff";
    ctx.clearRect(0, 0, dom.value.width, dom.value.height);

    edges.forEach(edge => {
        if (!("index" in edge)) return;
        ctx.beginPath();
        ctx.moveTo(edge.source.x, edge.source.y);
        ctx.lineTo(edge.target.x, edge.target.y);
        ctx.closePath();
        ctx.stroke();
    });

    nodes.forEach(node => {
        ctx.beginPath();
        ctx.ellipse(
            node.x, node.y,
            5, 5, 0, 0, Math.PI * 2
        );
        ctx.textAlign = "center"
        ctx.fillStyle = "#f00"
        ctx.fillText(node.name, node.x, node.y - 10)
        ctx.fillStyle = "#fff"
        ctx.closePath();
        ctx.fill();
    });

    if (contine_f) window.requestAnimationFrame(frame);
}
function init() {
    const force = d3.forceSimulation(nodes)
        .force("center", d3.forceCenter().x(dom.value.width / 2).y(200))
        .force("link", d3.forceLink(edges).distance(_ => {
            return 80;
        }))
        .force("charge", d3.forceManyBody().strength(_ => {
            return -10;
        }))
        .alphaMin(0.1)
        .alphaDecay(0.01)
        .force("random", () => {
            nodes.forEach(node => {
                node.x += (Math.random() - 0.5) * 0.4;
                node.y += (Math.random() - 0.5) * 0.4;
            })
        })

    force.on("end", () => {
        force.alphaDecay(0.01).restart();
    });

    frame();
}
const dom = ref() as Ref<HTMLCanvasElement>;
onMounted(() => {
    dom.value.width = dom.value.clientWidth;
    dom.value.height = 400;

    init();
    window.addEventListener("resize", resize)
});
onUnmounted(() => {
    contine_f = false;
    window.removeEventListener("resize", resize)
});

function resize() {
    location.reload();
}
</script>

<template>
    <layout>
        <div class="container">
            <div class="tips">Two things awe me most, the starry sky above me and the moral law within me.</div>
            <canvas ref="dom"></canvas>
            <div style="grid-column: 1 / 7;">
                <ElButton>WangLab</ElButton>
                <ElButton>YuLab</ElButton>
                <ElButton>HuLab</ElButton>
            </div>
        </div>
    </layout>
</template>

<style scoped>
.container {
    display: grid;
    max-width: 900px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 10px;
}

.container .tips {
    display: flex;
    grid-column: 1 / 5;
    align-items: center;
    font-size: 20px;
    line-height: 32px;
    font-weight: 700;
}

.container canvas {
    display: inline-block;
    width: 100%;
    height: 100%;
    grid-column: 5 / 13;
}
</style>
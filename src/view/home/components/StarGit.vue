<script setup lang="ts">
import * as THREE from "three";
import { starData } from "./data";
import { onMounted, onUnmounted } from "vue";

function create_point_attr_pos() {
    const r = THREE.MathUtils.randFloat(5, 10);
    const degree = THREE.MathUtils.randFloat(0, 360);
    const x = r * Math.sin(degree);
    const y = r * Math.cos(degree);
    const z = THREE.MathUtils.randFloatSpread(20);
    return [x, y, z];
}
function create_point_attr() {
    const pos: number[] = [];
    const color: number[] = [];
    for (let i = 0; i < starData.length; i++) {
        const [x, y, z] = create_point_attr_pos();
        pos.push(x, y, z);

        const c = new THREE.Color(starData[i].color);
        color.push(c.r, c.g, c.b, 1);
    }
    return { pos, color };
}
function create_circle_texture() {
    const dom = document.createElement("canvas");
    dom.width = 64;
    dom.height = 64;
    const ctx = dom.getContext("2d");
    if (!ctx) return;

    // 绘制圆形渐变
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.5, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.7, 'rgba(255,255,255,0.5)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(dom);
    return texture;
}
function create_text_texture(word: string) {
    const dom = document.createElement("canvas");
    dom.width = 400;
    dom.height = 200;
    const ctx = dom.getContext("2d");
    if (!ctx) return;

    ctx.font = `24px Arial`;
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#ffffff'; // 添加文字阴影
    ctx.shadowBlur = 3; // 阴影模糊度
    ctx.fillText(word, dom.width / 2, dom.height / 2);

    return new THREE.CanvasTexture(dom);
}

function init() {
    const dom = document.querySelector(".bg");
    if (!dom) return () => { };
    // 定义新的场景
    const scene = new THREE.Scene();

    // 添加点
    const texture = create_circle_texture();
    const p_geometry = new THREE.BufferGeometry();
    const p_material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.5,
        map: texture,
        transparent: true,
        alphaTest: 0.1,
        vertexColors: true,
    });
    const { pos, color } = create_point_attr();
    p_geometry.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    p_geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(color), 4));
    const p_instance = new THREE.Points(p_geometry, p_material);
    p_instance;
    // scene.add(p_instance);

    // 添加文本
    const texts: Array<THREE.Sprite> = [];
    starData.forEach((item, i) => {
        const t_texture = create_text_texture(item.word);
        const t_material = new THREE.SpriteMaterial({
            map: t_texture,
            transparent: true,
            color: starData[i].color
        });
        const t_instance = new THREE.Sprite(t_material);
        t_instance.scale.set(4, 2, 1);
        texts.push(t_instance);
    });
    texts.forEach(item => scene.add(item));

    // 添加环境光
    const light = new THREE.AmbientLight(0x404040);
    scene.add(light);

    // 渲染器
    const render = new THREE.WebGLRenderer({
        alpha: true
    });
    render.setSize(dom.clientWidth, dom.clientHeight);
    dom.appendChild(render.domElement);

    // 透视相机，从z轴往下看
    const camera = new THREE.PerspectiveCamera(
        75, window.innerWidth / window.innerHeight,
        0.1, 1000
    );
    camera.position.set(0, 0, 6); // x y z
    camera.lookAt(0, 0, 0);
    camera.rotateX(THREE.MathUtils.degToRad(-5));

    let id: number;
    let speed = 0.03;
    function animate() {
        id = requestAnimationFrame(animate);

        for (let step = 0; step < starData.length; step++) {
            pos[step * 3 + 2] += speed;
            if (pos[step * 3 + 2] > 10) {
                const [x, y, _] = create_point_attr_pos();
                pos[step * 3 + 0] = x;
                pos[step * 3 + 1] = y;
                pos[step * 3 + 2] = -10;
            }
            texts[step].position.set(
                pos[step * 3 + 0],
                pos[step * 3 + 1],
                pos[step * 3 + 2] - 0.03
            );
        }
        p_geometry.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));

        render.render(scene, camera);
    }
    animate();

    return function () {
        cancelAnimationFrame(id);
        dom.removeChild(render.domElement);
        if (render) render.dispose();
    }
}

let end_func: () => void = () => { };
onMounted(() => {
    end_func = init();
});
onUnmounted(() => {
    end_func();
});
</script>

<template>
    <div></div>
</template>

<style lang="css" scoped></style>

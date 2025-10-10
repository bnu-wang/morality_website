<template>
  <div class="star-container" ref="containerRef">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// 星星数据
import { starData } from './data';

const containerRef = ref<HTMLElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let starObjects: THREE.Object3D[] = [];
let lineObjects: THREE.Object3D[] = [];
let animationId: number;

// 随机生成范围内的坐标
const getRandomPosition = (range: number) => {
  return (Math.random() - 0.5) * 2 * range;
};

// 创建星星
  const createStars = () => {
    const range = 60; // 稍微增大范围以适应相机拉远
    const textGroup = new THREE.Group();
    
    // 创建SVG纹理加载器
    const textureLoader = new THREE.TextureLoader();
    
    // 更均匀地分布星星，设置合适的Z轴范围以实现近大远小效果
    starData.forEach((data, index) => {
      // 使用更有规律的分布方式，但增加Z轴范围
      let starPosition;
      if (index % 3 === 0) {
        // 一部分使用规则网格分布
        const gridSize = Math.ceil(Math.sqrt(starData.length));
        const row = Math.floor(index / gridSize);
        const col = index % gridSize;
        // 增加Z轴范围以实现近大远小效果
        const zPos = -50 + Math.random() * 100;
        starPosition = new THREE.Vector3(
          -range + (col / (gridSize - 1)) * range * 2,
          -range + (row / (gridSize - 1)) * range * 2,
          zPos
        );
      } else {
        // 另一部分使用随机分布，增加Z轴范围
        starPosition = new THREE.Vector3(
          getRandomPosition(range * 0.8),
          getRandomPosition(range * 0.8),
          getRandomPosition(100) // 增大Z轴范围
        );
      }
      
      // 使用SVG图片代替球体，并应用starData中的颜色
      const starTexture = textureLoader.load('/src/assets/img/star.svg');
      // 确保颜色正确应用到SVG上
      const color = new THREE.Color(data.color);
      // 根据z轴位置设置基础透明度，保持良好的可见性
        const baseOpacity = Math.min(1.0, 1.2 - Math.abs(starPosition.z) / 200); // 保持透明度，确保缩小后的星星仍清晰可见
      
      // 恢复一定透明度和混合模式，同时保持颜色的实体感
        const starMaterial = new THREE.SpriteMaterial({ 
          map: starTexture,
          color: color,
          transparent: true, // 恢复透明度以实现闪烁效果
          opacity: baseOpacity,
          // 恢复发光效果
          blending: THREE.AdditiveBlending
        });
      
      // 为所有主要星星添加光晕效果，调整为远处星空的感觉
      if (true) { // 让所有主要星星都有光晕
        // 创建一个稍大、半透明的光晕
        const haloTexture = textureLoader.load('/src/assets/img/star.svg');
        const haloColor = new THREE.Color(color).lerp(new THREE.Color(0xffffff), 0.3); // 光晕颜色更贴近星星原色
        // 增强光晕效果，恢复朦胧感
          const haloMaterial = new THREE.SpriteMaterial({
            map: haloTexture,
            color: haloColor,
            transparent: true,
            opacity: 0.6 * (1 + Math.abs(starPosition.z) / 200), // 进一步提高光晕强度，增强朦胧感
            blending: THREE.AdditiveBlending
          });
        
        const halo = new THREE.Sprite(haloMaterial);
        halo.position.copy(starPosition);
        
        // 同步缩小光晕大小，与星星大小比例保持一致
        const haloDistanceFactor = Math.max(0.5, 1 + Math.abs(starPosition.z) / 100);
        const distanceFactor = Math.max(0.2, 1 - Math.abs(starPosition.z) / 150);
        const maxHaloSize = 10; // 进一步缩小光晕最大尺寸，与星星大小同步
        const haloSize = Math.min(maxHaloSize, 4.375 * distanceFactor * haloDistanceFactor); // 进一步缩小光晕基础大小，与星星大小同步
        halo.scale.set(haloSize, haloSize, haloSize);
        
        scene.add(halo);
        
        // 为光晕添加独立的闪烁效果，远处星星闪烁更缓慢
        (halo as any).currentOpacity = haloMaterial.opacity;
        (halo as any).minOpacity = haloMaterial.opacity * 0.8;
        (halo as any).maxOpacity = haloMaterial.opacity * 1.2;
        (halo as any).opacitySpeed = 0.001 + Math.random() * 0.003; // 减慢闪烁速度
        (halo as any).opacityDirection = Math.random() > 0.5 ? 1 : -1;
        (halo as any).material = haloMaterial;
        
        scene.add(halo);
        
        // 为光晕添加独立的闪烁效果
        (halo as any).currentOpacity = haloMaterial.opacity;
        (halo as any).minOpacity = haloMaterial.opacity * 0.5;
        (halo as any).maxOpacity = haloMaterial.opacity * 1.5;
        (halo as any).opacitySpeed = 0.003 + Math.random() * 0.005;
        (halo as any).opacityDirection = Math.random() > 0.5 ? 1 : -1;
        (halo as any).material = haloMaterial;
      }
      
      // 创建精灵对象
      const starSprite = new THREE.Sprite(starMaterial);
      starSprite.position.copy(starPosition);
      
      // 根据Z轴位置设置大小，将主要星星再缩小一倍
        const distanceFactor = Math.max(0.3, 1 - Math.abs(starPosition.z) / 180);
        const maxSize = 5; // 进一步缩小最大尺寸，将星星再缩小一倍
        const starSize = Math.min(maxSize, 3.75 * distanceFactor); // 进一步缩小基础大小，将星星再缩小一倍
      starSprite.scale.set(starSize, starSize, starSize);
      
      // 增强闪烁效果
        // 根据z轴位置设置基础透明度，近处清晰，远处朦胧
        (starSprite as any).currentOpacity = baseOpacity;
        (starSprite as any).minOpacity = Math.max(0.5, baseOpacity - 0.4); // 扩大闪烁范围
        (starSprite as any).maxOpacity = baseOpacity + 0.3; // 提高最大透明度
        (starSprite as any).opacitySpeed = 0.01 + Math.random() * 0.01; // 加快闪烁速度，增强闪烁效果
      (starSprite as any).opacityDirection = Math.random() > 0.5 ? 1 : -1;
      
      // 添加旋转速度属性
      (starSprite as any).rotationSpeed = (Math.random() - 0.5) * 0.03; // 稍微加快旋转速度
      
      textGroup.add(starSprite);
      starObjects.push(starSprite); // 星星作为主对象存储
      
      // 创建文字材质，与星星分开位置，并根据Z轴位置设置透明度
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // 设置canvas尺寸 - 增大以容纳更大的文字
      const fontSize = 24; // 增大字体大小
      canvas.width = 400;
      canvas.height = 80;
      
      ctx.font = `${fontSize}px Arial`;
      ctx.fillStyle = '#ffffff'; // 使用白色让文字更清晰
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = '#ffffff'; // 添加文字阴影
      ctx.shadowBlur = 3; // 阴影模糊度
      ctx.fillText(data.word, canvas.width / 2, canvas.height / 2);
      
      // 创建纹理
      const texture = new THREE.CanvasTexture(canvas);
      // 根据Z轴位置设置文字透明度，远处文字更朦胧，近处文字更清晰
      const textOpacity = Math.min(1.0, 1.2 - Math.abs(starPosition.z) / 180);
      const material = new THREE.SpriteMaterial({ 
        map: texture, 
        transparent: true,
        opacity: textOpacity // 根据Z轴位置调整文字透明度
      });
      
      // 创建精灵，放在星星旁边，避免重叠
      const sprite = new THREE.Sprite(material);
      // 计算一个垂直于摄像机到星星方向的偏移
      const offsetDirection = new THREE.Vector3(
        0.5 - Math.random(), 
        0.5 - Math.random(), 
        0
      ).normalize().multiplyScalar(20); // 增大偏移距离，避免与星星重叠
      sprite.position.copy(starPosition).add(offsetDirection);
      
      // 根据Z轴位置设置文字大小，将文字扩大到原来的2倍
        const textSize = 40 * distanceFactor; // 扩大文字基础大小到原来的2倍
      sprite.scale.set(textSize, textSize / 5, 1); // 保持比例
      
      textGroup.add(sprite);
      starObjects.push(sprite);
    });
  
  scene.add(textGroup);
};

// 创建星星之间的连线
const createConnections = () => {
  const connectionGroup = new THREE.Group();
  const maxDistance = 25; // 减小距离，增加局部连接
  const minConnections = 3; // 每颗星至少连接数
  const maxConnections = 6; // 每颗星最多连接数
  const points: THREE.Vector3[] = [];
  const colors: number[] = [];
  
  // 先收集所有星星（圆点）的位置和颜色
  interface StarData {
    star: THREE.Object3D;
    color: THREE.Color;
  }
  
  const stars: StarData[] = [];
  for (let i = 0; i < starObjects.length; i += 2) {
    const star = starObjects[i];
    const dataIndex = Math.floor(i / 2);
    const color = new THREE.Color(starData[dataIndex].color);
    stars.push({ star, color });
  }
  
  // 为每颗星星连接到多个附近的星星，创建密集网络效果
  stars.forEach(({star: currentStar, color: currentColor}, index) => {
    const currentPosition = currentStar.position.clone();
    
    // 计算与其他星星的距离
    interface DistanceData {
      star: THREE.Object3D;
      color: THREE.Color;
      distance: number;
    }
    
    const distances: DistanceData[] = [];
    stars.forEach(({star: otherStar, color: otherColor}, otherIndex) => {
      if (otherIndex === index) return;
      
      const distance = currentPosition.distanceTo(otherStar.position);
      if (distance < maxDistance) {
        distances.push({ 
          star: otherStar, 
          color: otherColor, 
          distance 
        });
      }
    });
    
    // 按距离排序
    distances.sort((a, b) => a.distance - b.distance);
    
    // 连接到最近的星星，数量随机但有保障
    const connectionCount = minConnections + Math.floor(Math.random() * (maxConnections - minConnections + 1));
    const actualConnections = Math.min(connectionCount, distances.length);
    
    for (let i = 0; i < actualConnections; i++) {
      const { star: otherStar, color: otherColor } = distances[i];
      const otherPos = otherStar.position.clone();
      
      // 添加线段端点
      points.push(currentPosition.clone());
      points.push(otherPos.clone());
      
      // 添加渐变色
      currentColor.toArray(colors, colors.length);
      otherColor.toArray(colors, colors.length);
    }
  });
  
  // 创建线几何体
  const geometry = new THREE.BufferGeometry();
  geometry.setFromPoints(points);
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  
  // 创建线材质，更细更透明
  const lineMaterial = new THREE.LineBasicMaterial({ 
    vertexColors: true,
    transparent: true,
    opacity: 0.25, // 更透明的线
    linewidth: 0.8 // 更细的线
  });
  
  const lines = new THREE.LineSegments(geometry, lineMaterial);
  connectionGroup.add(lines);
  lineObjects.push(lines);
  
  scene.add(connectionGroup);
};

// 初始化Three.js
const initThree = async () => {
  await nextTick();
  
  if (!containerRef.value || !canvasRef.value) return;
  
  const container = containerRef.value;
  const canvas = canvasRef.value;
  
  // 创建场景
  scene = new THREE.Scene();
  // 使用更深的背景色，让星星更突出
  // 使用图片作为背景，替代纯色背景
    // const textureLoader = new THREE.TextureLoader();
    // const bgTexture = textureLoader.load('/src/assets/img/bg.jpg');
    // scene.background = bgTexture;
  
  // 创建相机，调整位置让星星和文字清晰可见
  const width = container.clientWidth;
  const height = container.clientHeight;
  camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1500); // 减小视场角，让星星更集中
  camera.position.z = 120; // 移近相机，让星星和文字更清晰可见
        
    // 添加更多的小星星，保持适量数量
      const addSmallStars = () => {
        // 创建SVG纹理加载器
        const textureLoader = new THREE.TextureLoader();
        const smallStarTexture = textureLoader.load('/src/assets/img/star.svg');
        
        // 添加更多的小星星，按照网格分布为主，随机为辅
        // 进一步增加星星密度以弥补星星大小减小的影响
        const gridDensity = 300; // 进一步增加星星数量，弥补星星再次缩小的影响
        const gridSize = 150; // 保持网格范围
      
      for (let i = 0; i < gridDensity; i++) {
      // 使用混合分布方式
      let x, y, z;
      
      if (i % 5 === 0) {
        // 随机分布的点
        x = getRandomPosition(gridSize);
        y = getRandomPosition(gridSize);
      } else {
        // 网格分布的点，更均匀
        const gridCol = i % 10;
        const gridRow = Math.floor(i / 10);
        x = -gridSize/2 + (gridCol / 9) * gridSize + (Math.random() - 0.5) * 2; // 轻微随机化
        y = -gridSize/2 + (gridRow / (gridDensity/10 - 1)) * gridSize + (Math.random() - 0.5) * 2;
      }
      
      // 设置适中的Z轴范围，保持层次感
        z = -60 + Math.random() * 120;
      
      // 保持小背景星星的亮度
        // 根据z轴位置设置初始透明度，近处清晰，远处适当柔和
        const starOpacity = Math.min(0.8, 1.0 - Math.abs(z) / 300); // 保持透明度
      
      // 保持小背景星星的混合模式
        const smallStarMaterial = new THREE.SpriteMaterial({
          map: smallStarTexture,
          color: 0xffffff,
          transparent: true,
          opacity: starOpacity,
          blending: THREE.AdditiveBlending,
          fog: false
        });
      
      // 计算星星大小，再次缩小到原来的1/2
        const starDistanceFactor = Math.max(0.1, 1 - Math.abs(z) / 150);
        const maxSmallStarSize = 3.75; // 再次缩小最大尺寸到原来的1/2
        const size = Math.min(maxSmallStarSize, 3 * starDistanceFactor); // 再次缩小基础大小到原来的1/2
      
      // 增加光晕效果，让星星更明显
        if (Math.abs(z) > 20) { // 降低条件，让更多星星有光晕
        // 创建一个稍大、半透明的光晕
        const haloTexture = textureLoader.load('/src/assets/img/star.svg');
        // 大幅增强小背景星星的光晕效果，恢复朦胧感
            const haloMaterial = new THREE.SpriteMaterial({
              map: haloTexture,
              color: 0xffffff,
              transparent: true,
              opacity: 0.7 * (Math.abs(z) / 100), // 大幅提高光晕强度，增强朦胧感
              blending: THREE.AdditiveBlending,
              fog: false
            });
        
        const halo = new THREE.Sprite(haloMaterial);
        halo.position.copy(new THREE.Vector3(x, y, z));
        
        // 光晕大小根据距离调整
        const haloDistanceFactor = Math.max(0.5, 1 + (Math.abs(z) - 30) / 50);
        const maxSmallHaloSize = 40; // 设置小光晕最大尺寸限制
        const haloSize = Math.min(maxSmallHaloSize, size * 2 * haloDistanceFactor);
        halo.scale.set(haloSize, haloSize, haloSize);
        
        scene.add(halo);
        
        // 为光晕添加独立的闪烁效果
        (halo as any).currentOpacity = haloMaterial.opacity;
        (halo as any).minOpacity = haloMaterial.opacity * 0.5;
        (halo as any).maxOpacity = haloMaterial.opacity * 1.5;
        (halo as any).opacitySpeed = 0.003 + Math.random() * 0.005;
        (halo as any).opacityDirection = Math.random() > 0.5 ? 1 : -1;
        (halo as any).material = haloMaterial;
      }
      
      const smallStar = new THREE.Sprite(smallStarMaterial);
      smallStar.position.set(x, y, z);
      
      // 根据Z轴位置设置大小，实现近大远小效果，增大小星星尺寸
      // 不再重复定义size，使用之前已经定义的size变量
      smallStar.scale.set(size, size, size);
      
      scene.add(smallStar);
      
      // 为小背景星星添加闪烁效果
      (smallStar as any).currentOpacity = starOpacity;
      (smallStar as any).minOpacity = Math.max(0.4, starOpacity - 0.3);
      (smallStar as any).maxOpacity = starOpacity + 0.2;
      (smallStar as any).opacitySpeed = 0.008 + Math.random() * 0.01;
      (smallStar as any).opacityDirection = Math.random() > 0.5 ? 1 : -1;
      (smallStar as any).rotationSpeed = (Math.random() - 0.5) * 0.015;
      (smallStar as any).material = smallStarMaterial;
    }
  };
  
  addSmallStars();
  
  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ 
    canvas, 
    antialias: true,
    alpha: true
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  // 添加控制器
  controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = true;
  controls.rotateSpeed = 0.5;
  controls.zoomSpeed = 0.8;
  
  // 添加光源
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(100, 100, 100);
  scene.add(pointLight);
  
  // 创建星星和连线
  createStars();
  createConnections();
  
  // 开始动画循环
  animate();
};

// 动画循环
  const animate = () => {
    animationId = requestAnimationFrame(animate);
    
    // 更新控制器
    controls.update();
    
    // 删除全局旋转效果
    
    // 更新主星星、光晕和小背景星星的闪烁效果和旋转
    scene.traverse((object: any) => {
      if ((object as any).currentOpacity !== undefined && 
          (object as any).opacitySpeed !== undefined && 
          (object as any).material) {
        // 更新透明度实现闪烁效果 - 增强闪烁速度和变化效果
        (object as any).currentOpacity += (object as any).opacitySpeed * (object as any).opacityDirection * 1.5;
        
        // 到达边界时反转方向，增加随机性使闪烁更自然
        if ((object as any).currentOpacity > (object as any).maxOpacity) {
          (object as any).currentOpacity = (object as any).maxOpacity;
          (object as any).opacityDirection = -1;
          // 随机改变速度使闪烁更自然
          (object as any).opacitySpeed = (object as any).opacitySpeed * (0.9 + Math.random() * 0.2);
        } else if ((object as any).currentOpacity < (object as any).minOpacity) {
          (object as any).currentOpacity = (object as any).minOpacity;
          (object as any).opacityDirection = 1;
          // 随机改变速度使闪烁更自然
          (object as any).opacitySpeed = (object as any).opacitySpeed * (0.9 + Math.random() * 0.2);
        }
        
        // 应用透明度
        ((object as any).material as THREE.SpriteMaterial).opacity = (object as any).currentOpacity;
        
        // 应用旋转效果
        if ((object as any).rotationSpeed !== undefined) {
          object.rotation.z += (object as any).rotationSpeed;
        }
      }
    });
    
    // 渲染场景
    renderer.render(scene, camera);
  };

// 窗口大小变化处理
const handleResize = () => {
  if (!containerRef.value || !renderer || !camera) return;
  
  const container = containerRef.value;
  const width = container.clientWidth;
  const height = container.clientHeight;
  
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  
  renderer.setSize(width, height);
};

// 生命周期
onMounted(() => {
  initThree();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
  window.removeEventListener('resize', handleResize);
  
  // 清理资源
  if (controls) {
    controls.dispose();
  }
  if (renderer) {
    renderer.dispose();
  }
});
</script>

<style scoped>
.star-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>

<script setup lang="ts">

</script>

<template>
    <el-container>
        <el-header style="border-bottom: 1px solid #6A7794;">
            <div class="container">
                <div style="grid-column: 1 / 5;">Mapping Human Morality</div>
                <div style="grid-column: 5 / 13;">
                    <ul class="nav">
                        <li><span class="icon icon-01 icon-aims"></span>Our Aims</li>
                        <li><span class="icon icon-01 icon-search"></span>Pilot Studies</li>
                        <li><span class="icon icon-01 icon-task"></span>Our Plans</li>
                    </ul>
                </div>
            </div>
        </el-header>
        <el-main>
            <slot></slot>
        </el-main>
    </el-container>
</template>

<style scoped>
.container {
    display: grid;
    max-width: 900px;
    margin: auto;
    grid-template-columns: repeat(12, 1fr);
    line-height: 60px;
    font-size: 14px;
}

.container .nav {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    margin: 0;
}

.container .nav li {
    cursor: pointer;
}

.container .nav .icon {
    font-size: 16px;
    margin: 0 10px 0 0;
}
</style>
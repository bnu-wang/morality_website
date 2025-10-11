<template>
    <div class="para">
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
.para {
    display: block;
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 10px;
    background-color: rgba(79, 86, 255, 1);
    color: #fff;
}

</style>
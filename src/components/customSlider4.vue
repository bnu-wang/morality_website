<template>
    <div class="para">
        <slot name="title"></slot>
        <slot name="content"></slot>
    </div>
</template>

<style lang="css" scoped>
.para {
    display: block;
    max-width: 1200px;
    margin: 0 auto;
    padding: 25px 0 10px 0;
    background-image: linear-gradient(#444CFC, #444CFC);
    background-size: 25px 25px;
    background-position: 0px 0px;
    background-repeat: no-repeat;
}

</style>
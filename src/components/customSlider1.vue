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
    background-image: linear-gradient(rgba(255, 211, 175, 1), rgba(255, 211, 175, 1)),
                      linear-gradient(rgba(255, 211, 175, 1), rgba(255, 211, 175, 1)),
                      linear-gradient(rgba(255, 161, 85, 1), rgba(255, 161, 85, 1)),
                      linear-gradient(rgba(102, 109, 255, 1), rgba(102, 109, 255, 1)),
                      linear-gradient(rgba(102, 109, 255, 1), rgba(102, 109, 255, 1));
    background-size: 25px 25px, 10px 11px, 18px 19px, 8px 8px, 10px 27px;
    background-position: 0px 0px, 100% 8px, 100% 0px, calc(100% - 18px) 0px, 100% 0px;
    background-repeat: no-repeat;
}

</style>
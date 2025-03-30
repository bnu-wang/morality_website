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
    padding: 25px 0px 20px 20px;
    background-image: linear-gradient(rgba(255, 211, 175, 1), rgba(255, 211, 175, 1)),
                      linear-gradient(rgba(255, 161, 85, 1), rgba(255, 161, 85, 1)),
                      linear-gradient(rgba(102, 109, 255, 1), rgba(102, 109, 255, 1)),
                      linear-gradient(rgba(102, 109, 255, 1), rgba(102, 109, 255, 1));
    background-size: 10px 11px, 18px 19px, 8px 8px, 10px 27px;
    background-position: 0px calc(100% - 8px), 0px 100%, 18px 100%, 0px 100%;
    background-repeat: no-repeat;
}

</style>
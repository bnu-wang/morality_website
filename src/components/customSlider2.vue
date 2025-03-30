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
    padding: 64px 30px 30px 64px;
    background-color: rgba(79, 86, 255, 1);
    color: #fff;
    background-image: linear-gradient(rgba(255, 211, 175, 1), rgba(255, 211, 175, 1)),
                      linear-gradient(rgba(255, 161, 85, 1), rgba(255, 161, 85, 1)),
                      linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,.4)),
                      linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,.4)),
                      linear-gradient(rgba(255, 161, 85, 1), rgba(255, 161, 85, 1)),
                      linear-gradient(rgba(255, 211, 175, 1), rgba(255, 211, 175, 1)),
                      linear-gradient(transparent, transparent);
    background-position: 32px 0px,0px 0px,20px 0px,0px 51px,100% 0%,100% 20%,100% 80%;
    background-size: 30px 30px,62px 51px,78px 30px,30px 30px,24px 20%,24px 80%,24px 20%;
    background-repeat: no-repeat;
}

</style>
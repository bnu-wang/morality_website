<template>
    <div class="cho-button">
        <slot></slot>
    </div>
</template>

<style scoped>
.cho-button {
    --font-color-link: rgba(68, 76, 252, 1);
    --lightorange: rgba(255, 211, 175, 1);
    --orange: rgba(255, 161, 85, 1);
    --lightblue: rgba(102, 109, 255, 1);
    --font-color-white: #fff;
}

.cho-button {
    display: inline-block;
    padding: 10px 57px 10px 32px;
    background-color: var(--font-color-link);
    background-image: linear-gradient(var(--lightorange), var(--lightorange)),
        linear-gradient(var(--orange), var(--orange)),
        linear-gradient(var(--lightblue), var(--lightblue)),
        linear-gradient(var(--lightblue), var(--lightblue));
    background-position: 7px 0px, 0px 0px, 0px 20px, 0px 0px;
    background-size: 11px 11px, 18px 20px, 8px 8px, 28px 11px;
    background-repeat: no-repeat;
    color: var(--font-color-white);
    position: relative;
    font-size: 1rem;
    line-height: 1.5rem;
    cursor: pointer;
}

.cho-button::after {
    content: "";
    display: block;
    width: 20px;
    height: 0px;
    border: 1px solid var(--font-color-white);
    position: absolute;
    top: calc(100% / 2 - 1px);
    right: calc(57px / 2 - 10px);
}
</style>
<template>
<div id="app">
    <router-view />
</div>
</template>

<style>
:root {
    --spacing: 16px;
    --spacing-big: 32px;
    --spacing-small: 8px;
    --topbar-height: 56px;
    --color-primary: #8bc34a;
    --color-primary-dark: #5a9216;
    --color-primary-light: #bef67a;
    --color-primary-extra-light: #f2ffab;
    --color-accent: #790e8b;
    --transition-duration: .3s;
    --transition-duration-long: .5s;
    --bar-size: 56px;
    --scrollbar-track-background: #0000;
    --scrollbar-track-background-hover: #0002;
    --scrollbar-thumb-background: #fff3;
    --scrollbar-thumb-background-hover: #fffc;
}

body {
    margin: 0;
}

#app {
    width: 100vw;
    height: 100vh;
    background-color: var(--color-primary-extra-light);
    color: white;
    overflow: hidden;
    font-family: cursive;
}

.noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.app-bar {
    width: 100%;
    height: var(--bar-size);
    background-color: var(--color-primary);
}
</style>

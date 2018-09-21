<template>
<div class="alphabet__dialog-letters-bar" />
</template>

<script>
export default {
    name: 'AlphabetDialogLettersBar'
}
</script>

<style scoped>
.alphabet__dialog-letters-bar {
    width: 100%;
    height: var(--bar-size);
    background-color: var(--color-primary);
    box-shadow: 0 0 16px 0 black;
    z-index: 205;
}

@media screen and (orientation:landscape) and (max-height: 480px) {
    .alphabet__dialog-letters-bar {
        height: calc(var(--bar-size) * 0.8);
    }
}
</style>

<template>
<div class="letters-bar">

</div>
</template>

<script>
export default {
    name: 'AlphabetDialogLettersBar',
    props: {
        areUnnecessaryComponentsVisible: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped>
.letters-bar {
    width: 100%;
    height: var(--bar-size);
    background-color: var(--color-primary);
    box-shadow: 0 0 16px 0 black;
    z-index: 205;
    transition: height var(--transition-duration);
}

@media screen and (orientation:landscape) and (max-height: 480px) {
    .letters-bar {
        height: calc(var(--bar-size) * 0.8);
    }
}
</style>

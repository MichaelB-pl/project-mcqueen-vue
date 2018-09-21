<template>
<div class="images-space" />
</template>

<script>
export default {
    name: 'AlphabetDialogImagesSpace'
}
</script>

<style scoped>
.images-space {
    width: 100%;
    height: calc(var(--alphabeth-dp) * 3);
    /* height: 30%; */
    /* padding-top: 30%; */
    background-color: var(--color-primary-light);
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    z-index: 202;
    transition: height var(--transition-duration);
}

@media screen and (orientation:landscape) {

    .images-space {
        height: calc(var(--alphabeth-dp) * 2);
    }

    @media(max-height: 480px) {

        .images-space {
            height: calc(var(--alphabeth-dp) * 2 + var(--bar-size) * 0.5);
        }
    }
}
</style>

<template>
<div class="main-space">
    <img :src="getSelectedImageUri()"/>
    </div>
</template>

<script>
export default {
    name: 'AlphabetDialogMainSpace'
}
</script>

<style scoped>
.main-space {
    width: 100%;
    height: calc(var(--alphabeth-dp) * 5);
    z-index: 201;
    transition: height var(--transition-duration);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}

.main-space>img {
    max-width: 0%;
    max-height: 0%;
}

@media screen and (orientation:landscape) {
    .main-space {
        height: calc(var(--alphabeth-dp) * 6);
    }

    @media(max-height: 480px) {

        .main-space {
            height: calc(var(--alphabeth-dp) * 6 + var(--bar-size) * 0.2);
        }
    }
}
</style>

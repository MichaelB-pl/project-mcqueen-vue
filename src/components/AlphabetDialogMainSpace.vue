<template>
<div class="alphabet__dialog-main-space">
    <transition name="pop-image">
        <img
        v-if="isImageVisible"
        :src="imageUri"
        />
    </transition>
</div>
</template>

<script>
export default {
    name: 'AlphabetDialogMainSpace',
    props: {
        isImageVisible: {
            type: Boolean,
            required: true
        },
        imageUri: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.alphabet__dialog-main-space {
    width: 100%;
    height: calc(var(--alphabeth-dp) * 5);
    /* height: 100%; */
    /* padding-top: 70%; */
    background-color: rebeccapurple;
    z-index: 201;
    transition: height var(--transition-duration);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}

.alphabet__dialog-main-space>img {
    max-width: 90%;
    max-height: 90%;
}

@media screen and (orientation:landscape) {
    .alphabet__dialog-main-space {
        height: calc(var(--alphabeth-dp) * 6);
    }

    @media(max-height: 480px) {

        .alphabet__dialog-main-space {
            height: calc(var(--alphabeth-dp) * 6 + var(--bar-size) * 0.2);
        }
    }
}

.pop-image-enter-active {
    transition: transform var(--transition-duration);
}

.pop-image-enter {
    transform: scale(0);
}
</style>

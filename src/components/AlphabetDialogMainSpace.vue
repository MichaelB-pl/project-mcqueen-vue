<template>
<div :class="['alphabet__main-space', 
        areUnnecessaryComponentsVisible ? '' : 'alphabet__dialog-main-space']">
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
        areUnnecessaryComponentsVisible: {
            type: Boolean,
            required: true
        },
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
    height: calc(100% - var(--bar-size));
}

@media screen and (orientation:landscape) and (max-height: 480px) {
    .alphabet__dialog-main-space {
        height: calc(100% - var(--bar-size) * 0.5);
    }
}

.pop-image-enter-active {
    transition: transform var(--transition-duration);
}

.pop-image-enter {
    transform: scale(0);
}
</style>

<template>
<div class="alphabet__main-space">
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
.pop-image-enter-active {
    transition: transform var(--transition-duration);
}

.pop-image-enter {
    transform: scale(0);
}
</style>

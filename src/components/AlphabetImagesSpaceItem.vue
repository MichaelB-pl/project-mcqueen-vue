<template>
<div class="alphabet__images-space-item">
    <img :src="uri"/>
    </div>
</template>

<script>
export default {
    name: 'AlphabetImagesSpaceItem',
    props: {
        uri: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.alphabet__images-space-item {
    width: 33%;
    height: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}

.alphabet__images-space-item>img {
    max-width: 90%;
    max-height: 90%;
}

@media screen and (orientation:landscape) {
    .alphabet__images-space-item {
        width: 20%;
        height: 100%;
    }
}
</style>

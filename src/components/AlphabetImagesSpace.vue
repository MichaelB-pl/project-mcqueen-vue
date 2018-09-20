<template>
<div class="images-space">
    <div class="image-item" v-for="(uri, index) in getImagesUri()" :key="index" v-on:click="$emit('imageSelected', index)">
        <img v-bind:src="uri"/>
        </div>
    </div>
</template>

<script>
 export default {
     name: 'images-space',
     props: ['alphabet', 'letterIndex'],
     data() {
         const uris = this.alphabet.map(letter => letter.uris);
         return {
             uris
         };
     },
     methods: {
         getImagesUri() {
             return this.uris[this.letterIndex];
         }
     }
 }
</script>

<style scoped>
.images-space {
    width: 100%;
    height: calc(var(--alphabeth-dp) * 3);
    background-color: var(--color-primary-light);
    z-index: 20;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    transition: height var(--transition-duration);
}

.image-item {
    width: 33%;
    height: 50%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}

.image-item>img {
    max-width: 90%;
    max-height: 90%;
}

@media screen and (orientation:landscape) {
    .images-space {
        height: calc(var(--alphabeth-dp) * 2);
    }

    .image-item {
        width: 20%;
        height: 100%;
    }

    @media(max-height: 480px) {
        .images-space {
            height: calc(var(--alphabeth-dp) * 2 + var(--bar-size) * 0.5);
        }
    }
}
</style>

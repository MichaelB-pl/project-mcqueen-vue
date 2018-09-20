<template>
<div class="alphabet__images-space">
    <AlphabetImagesSpaceItem 
        v-for="(uri, index) in getImagesUri()" 
        :key="index" 
        :uri="uri"
        @click.native="$emit('imageSelected', index)"
    />
</div>
</template>

<script>
import AlphabetItem from '../models/alphabet/alphabet-item';
import AlphabetImagesSpaceItem from './AlphabetImagesSpaceItem.vue';

export default {
    name: 'AlphabetImagesSpace',
    components: {
        AlphabetImagesSpaceItem
    },
    props: {
        alphabetItem: {
            type: AlphabetItem,
            required: true
        }
    },
    methods: {
        getImagesUri() {
            return this.alphabetItem.uris;
        }
    }
}
</script>

<style scoped>
.alphabet__images-space {
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

@media screen and (orientation:landscape) {
    .alphabet__images-space {
        height: calc(var(--alphabeth-dp) * 2);
    }

    @media(max-height: 480px) {
        .alphabet__images-space {
            height: calc(var(--alphabeth-dp) * 2 + var(--bar-size) * 0.5);
        }
    }
}
</style>

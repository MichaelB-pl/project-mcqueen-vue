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

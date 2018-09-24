<template>
<div class="alphabet__images-space">
    <AlphabetImagesSpaceItem 
        v-for="(uri, index) in uris" 
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
        uris: {
            type: Array,
            required: true
        }
    }
}
</script>

<template>
<div class="alphabet__images-space">
    <AlphabetImagesSpaceItem 
        v-for="(uri, index) in uris" 
        :key="index" 
        :uri="uri"
        @click.native="onImageSelected(index)"
    />
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import {
    playAudio,
    getLettersAudioUri
} from '../assets/audio/player';

import AlphabetImagesSpaceItem from './AlphabetImagesSpaceItem.vue';

export default {
    name: 'AlphabetImagesSpace',
    components: {
        AlphabetImagesSpaceItem
    },
    computed: {
        ...mapGetters({
            uris: 'selectedAlphabetItemUris'
        })
    },
    methods: {
        onImageSelected(index) {
            this.$store.commit('setAlphabetItemImageIndex', index);
            this.saySelectedImage();
        },
        saySelectedImage(){
            const letter = this.$store.getters.selectedAlphabetItem.letter;
            const imageName = this.$store.getters.selectedImageName;
            const uri = getLettersAudioUri(letter, imageName);
            playAudio(uri);
        }
    }
}
</script>

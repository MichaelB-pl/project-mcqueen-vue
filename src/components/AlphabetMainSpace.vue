<template>
<div class="alphabet__main-space">
    <div 
        v-if="!isSelectedAnyImage" 
        class="alphabet__main-space-background-letter noselect" 
        @click="saySelectedLetter()"
    >{{ backgroundLetter }}</div>

    <img 
        v-if="isSelectedAnyImage" 
        :src="selectedImageUri"
        @click="onImageClicked()"
    />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {
    playAudio,
    getLettersAudioUri
} from '../assets/audio/player';

export default {
    name: 'AlphabetMainSpace',
    computed: {
        backgroundLetter() {
            const letter = this.$store.getters.selectedAlphabetItem.letter;
            return `${letter.toUpperCase()}${letter.toLowerCase()}`;
        },
        ...mapGetters([
            'isSelectedAnyImage',
            'selectedImageUri'
        ]),
    },
    methods: {
        onImageClicked(){
            this.$store.commit('setAlphabetItemImageIndex', -1);
        },
        saySelectedLetter(){
            const letter = this.$store.getters.selectedAlphabetItem.letter;
            const src = getLettersAudioUri(letter, letter);
            playAudio(src);
        }
    }
}
</script>

<style scoped>
 .alphabet__main-space-background-letter {
     width: auto;
     height: auto;
     color: #0003;
     position: absolute;
     font-size: 40vmin;
     display: flex;
     flex-flow: column nowrap;
     justify-content: center;
     align-items: center;
 }
</style>

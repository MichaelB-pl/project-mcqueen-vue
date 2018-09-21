<template>
<div class="alphabet__main-space">
    <div 
        v-if="imageIndex === -1" 
        class="alphabet__main-space-background-letter noselect" 
        @click="$emit('backgroundLetterClicked')"
    >
        {{ getDisplayedLetter() }}
    </div>

    <img 
        v-if="imageIndex > -1" 
        :src="getSelectedImageUri()"
        @click="$emit('selectedImageClicked')"
    />
    </div>
</template>

<script>
import AlphabetItem from '../models/alphabet/alphabet-item';

export default {
    name: 'AlphabetMainSpace',
    props: {
        alphabetItem: {
            type: AlphabetItem,
            required: true
        },
        imageIndex: {
            type: Number,
            required: true
        }
    },
    methods: {
        getDisplayedLetter() {
            const letter = this.alphabetItem.letter;
            return `${letter.toUpperCase()}${letter.toLowerCase()}`;
        },

        getSelectedImageUri() {
            const uri = this.alphabetItem.uris[this.imageIndex];
            return uri;
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
     z-index: 2;
     display: flex;
     flex-flow: column nowrap;
     justify-content: center;
     align-items: center;
 }
</style>
